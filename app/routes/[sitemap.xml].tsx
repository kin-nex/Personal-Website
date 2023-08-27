const content = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://erkinsalih.com/</loc>
    </url>
    <url>
        <loc>https://erkinsalih.com/experience</loc>
    </url>
</urlset>
`

export const loader = async () =>
    new Response(content, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
            'xml-version': '1.0',
            encoding: 'UTF-8',
        },
    })
