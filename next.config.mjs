import createNextIntlPlugin from 'next-intl/plugin'
const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

/** @type {import('next').NextConfig}  */
const nextConfig = {
  experimental: {
    //turbo: false,
    reactStrictMode: false
  }
}

export default withNextIntl(nextConfig)
