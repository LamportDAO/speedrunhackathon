/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/QkAKqqBkaq",
        permanent: false
      },
      {
        source: "/register",
        destination: "https://dorahacks.io/hackathon/solanaspeedrun/detail",
        permanent: false
      }
    ]
  },
}

module.exports = nextConfig
