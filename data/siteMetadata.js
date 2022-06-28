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
    // add app.posthog.com   to the content security policy in the `next.config.js` file.
    // PostHog Analytics
    posthogAnalytics: true, // true or false
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
}

module.exports = siteMetadata
