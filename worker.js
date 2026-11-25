
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/sitemap.xml") {
      return new Response(
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://maslah-shelf.maslahaliow9.workers.dev/</loc>
    <lastmod>2026-11-25</lastmod>
  </url>
</urlset>`,
        {
          headers: {
            "Content-Type": "application/xml; charset=UTF-8"
          }
        }
      );
    }

    return env.ASSETS.fetch(request);
  }
};
