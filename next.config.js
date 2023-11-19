/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/Dpv5uGCT5E",
        permanent: false
      },
      {
        source: "/register",
        destination: "https://lu.ma/d6564wbw",
        permanent: false
      }
    ]
  },
}

module.exports = nextConfig
