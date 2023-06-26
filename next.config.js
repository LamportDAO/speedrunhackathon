/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://solanaspeedrun.com/discord",
        permanent: false
      }
    ]
  },
}

module.exports = nextConfig
