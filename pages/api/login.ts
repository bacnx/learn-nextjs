import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy, { ProxyResCallback } from 'http-proxy'
import Cookies from 'cookies'

interface Data {
  message: string
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res.status(404).json({ message: 'method not supported' })
  }

  return new Promise((resolve) => {
    // don't send cookie to server
    req.headers.cookie = ''

    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = ''

      proxyRes.on('data', (chunk) => {
        body += chunk
      })

      proxyRes.on('end', () => {
        try {
          const isSuccess =
            proxyRes.statusCode && 200 <= proxyRes.statusCode && proxyRes.statusCode < 300
          if (!isSuccess) {
            ;(res as NextApiResponse<Data>)
              .status(proxyRes.statusCode || 500)
              .json(JSON.parse(body))
            return resolve(true)
          }

          const { accessToken, expiredAt } = JSON.parse(body)
          const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' })

          cookies.set('access_token', accessToken, {
            expires: new Date(expiredAt),
            sameSite: 'lax',
          })
          ;(res as NextApiResponse<Data>).status(200).json({ message: 'login successfully' })
        } catch {
          ;(res as NextApiResponse<Data>).status(500).json({ message: 'something went wrong' })
        }

        resolve(true)
      })
    }

    proxy.once('proxyRes', handleLoginResponse)

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    })
  })
}

export const config = {
  api: {
    bodyParser: false,
  },
}
