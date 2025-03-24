import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const pages = [
		'/',
		'/about',
        '/portfolio',
		'/links',
		'/blog'
		// Add your routes here
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map((page) =>
        `<url>
          <loc>https://jobaadewumi.vercel.app${page}</loc>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
        </url>`).join('')}</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
