/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "lh3.googleusercontent.com",
      "tasteful-virtue-cd72b46d28.strapiapp.com",
      "tasteful-virtue-cd72b46d28.media.strapiapp.com", // ✅ لازم تضيف ده
    ],
  },
};

export default nextConfig;
