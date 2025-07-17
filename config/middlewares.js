module.exports = [
  'strapi::logger',
  'strapi::errors',
    {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['http://localhost:3000', 'https://dreav-ai.wl.r.appspot.com', 'https://youdra-ai-backend-dot-dreav-ai.wl.r.appspot.com'], // ✅ Add your allowed frontend domains
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      headers: '*',
      keepHeadersOnError: true,
    },
  },
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
