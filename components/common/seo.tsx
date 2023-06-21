import Head from 'next/head'

export interface SeoProps {
  title: string
  description?: string
  url?: string
  thumbnailUrl?: string
}

function Seo({ title, description, url, thumbnailUrl }: SeoProps) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} key="title" />
      {description && <meta name="description" content={description} key="description" />}

      {/*Open Graph / Facebook  */}
      <meta property="og:type" content="website" key="og-type" />
      {url && <meta property="og:url" content={url} key="og-url" />}
      <meta property="og:title" content={title} key="og-title" />
      {description && <meta property="og:description" content={description} key="og-description" />}
      {thumbnailUrl && <meta property="og:image" content={thumbnailUrl} key="og-image" />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" key="twitter-card" />
      {url && <meta property="twitter:url" content={url} key="twitter-url" />}
      <meta property="twitter:title" content={title} key="twitter-title" />
      {description && (
        <meta property="twitter:description" content={description} key="twitter-description" />
      )}
      {thumbnailUrl && <meta property="twitter:image" content={thumbnailUrl} key="twitter-image" />}
    </Head>
  )
}

export default Seo
