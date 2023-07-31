import { AppPropsWithLayout } from '@/models'
import { EmptyLayout } from '@/components/layout'
import { SWRConfig } from 'swr'
import { axiosClient } from '@/api-client/axios-client'
import { createEmotionCache, theme } from '@/utils'
import { CacheProvider } from '@emotion/react'
import Head from 'next/head'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Seo from '@/components/common/seo'
import 'highlight.js/styles/base16/solarized-dark.css'

const clientSideEmotionCache = createEmotionCache()

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Seo
        title="NextJS Tutorial"
        description="Prative NextJS + Typescript + MUI with Ease Frontend"
        url="https://learn-nextjs-amber-six.vercel.app/"
        thumbnailUrl="https://miro.medium.com/max/3840/1*8mjuQTYRCSniAAK9jJeOSA.png"
      />

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
