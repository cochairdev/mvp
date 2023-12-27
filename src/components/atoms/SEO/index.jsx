import Head from 'next/head'

export const SEO = ({ title, canonicalURL, description }) => (
  <Head>
    <meta charSet="utf-8" />
    <title>{`Cochair - ${title}`}</title>
    {canonicalURL && <link rel="canonical" href={canonicalURL} />}
    {!!description?.trim() && <meta name="description" content={description} />}
  </Head>
)
