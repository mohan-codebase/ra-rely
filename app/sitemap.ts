import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://relyadvisory.com.au';
  const routes = [
    '',
    '/solutions',
    '/solutions/accounts-payable',
    '/solutions/accounts-receivable',
    '/solutions/process-improvement',
    '/solutions/reporting-insights',
    '/how-we-work',
    '/for-accountants',
    '/industries',
    '/insights',
    '/about',
    '/faq',
    '/contact',
    '/book-a-review',
    '/finance-health-check',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/solutions') ? 0.8 : 0.7,
  }));
}
