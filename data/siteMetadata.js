const siteMetadata = {
  title: 'yu - design with codes',
  author: 'yu',
  headerTitle: 'de<signer+veloper/>',
  description: 'A blog created with Next.js and Tailwind.css',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://anuu.me',
  siteRepo: 'https://github.com/anuuyu/website',
  siteLogo: '/static/images/asset/logo.png',
  image: '/static/images/asset/yu.png',
  socialBanner: '/static/images/asset/twitter-card.png',
  email: 'yu@anuu.me',
  github: 'https://github.com/anuuyu',
  twitter: 'https://twitter.com/anuuyu',
  codepen: 'https://codepen.io/anuuyu',
  devto: 'https://dev.to/yu',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
}

module.exports = siteMetadata
