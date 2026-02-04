import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/.next'],
      },
      {
        userAgent: ['AhrefsBot', 'SemrushBot', 'DotBot'],
        disallow: '/',
      },
    ],
    sitemap: 'https://thusalapi.dev/sitemap.xml',
  }
}
