import { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  req.headers.cookie = ''

  proxy.web(req, res, {
    target: process.env.API_URL,
    changeOrigin: true,
    selfHandleResponse: false,
  })
}

export const config = {
  api: {
    bodyParser: false,
  },
}
