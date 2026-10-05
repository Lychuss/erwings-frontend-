export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://erwings.vercel.app/sitemap.xml",
  };
}