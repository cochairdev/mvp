import bundleAnalyzer from '@next/bundle-analyzer'

const isProduction = process.env.NODE_ENV === 'production'

const pageExtensions = ['js', 'jsx'].reduce((acc, ext) => {
  if (!isProduction) {
    acc.push(`dev.${ext}`)
  }
  acc.push(ext)
  return acc
}, [])

const withBundleAnalyzer = isProduction
  ? bundleAnalyzer({
      enabled: process.env.ANALYZE === 'true',
    })
  : config => config

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx'],
  transpilePackages: ['@ant-design'],

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

const defaultConfig = {
  pageExtensions,
  compiler: {
    styledComponents: true,
  },
  ...nextConfig,
}

export default withBundleAnalyzer(defaultConfig)
