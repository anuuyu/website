const bookmarksData = [
  {
    title:
      'Improved dark mode default styling with the color-scheme CSS property and the corresponding meta tag',
    description: `The color-scheme CSS property and the corresponding meta tag allow developers to opt their pages in to the theme-specific defaults of the user agent stylesheet.`,
    href: 'https://web.dev/color-scheme/',
  },
  {
    title: 'An in-depth SVG tutorial',
    description: `SVG is an awesome and incredibly powerful image format. This tutorial gives you an overview of SVG by explaining all you need to know in a simple way.`,
    href: 'https://flaviocopes.com/svg/',
  },
  {
    title: 'StackExchange - The 8 best resources every developer must follow',
    description: `As a developer, you should be familiar with StackExchange. There are tons of resources available on there about software development and programming. Out of everything, I have compiled a list of the top 8 resources that I find helpful. These resources cover a wide range of topics such as web development, general programming, and best practices to follow during development.`,
    href: 'https://www.loginradius.com/blog/engineering/stackexchange-8-best-resources-every-developer-must-follow/',
  },
  {
    title: 'NextJS + Supabase + Clerk: Build a simple todo app with multifactor authentication',
    description: `Learn how to build a todo app with Next.js, Clerk, and Supabase. This app will add todos, sign in, sign up, user profile and multifactor authentication.`,
    href: 'https://clerk.dev/blog/nextjs-supabase-todos-with-multifactor-authentication',
  },
  {
    title: 'Font Sizes in UI Design: The Complete Guide',
    description: `One of the most common questions I receive from beginning UI designers is: what font size should I use for my project? Maybe it’s a website, maybe an Android app, maybe iPhone/iPad.`,
    href: 'https://learnui.design/blog/ultimate-guide-font-sizes-ui-design.html',
  },
  {
    title: '10 Principles for Typography in UI Design',
    description: `Best practices, tips, and terminology for using typography in UI.`,
    href: 'https://uxdesign.cc/10-principles-for-typography-usage-in-ui-design-a8f038f43ffd',
  },
  {
    title: '23 Free Websites to Learn JavaScript in 2022',
    description: `JavaScript is a programming language that's used for a variety of purposes, including web development, web apps, game development, and more.`,
    href: 'https://www.freecodecamp.org/news/23-free-websites-to-learn-javascript/',
  },
  {
    title: 'How to get more clients as a freelance developer',
    description: `Practical tips I wish I knew a few years ago.`,
    href: 'https://www.freecodecamp.org/news/7-steps-to-get-more-clients-as-a-freelance-developer-ee00342f9260',
  },
  {
    title: 'What’s the difference between JavaScript and ECMAScript?',
    description: `This article represents my current understanding of the differences between JavaScript and ECMAScript.`,
    href: 'https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/',
  },
  {
    title: 'Next.js + TypeScript, the Big List of Tools, and Upcoming Features 🧘‍♂️',
    description: `😌 Wadup Next.js devs, time flew since the last issue. Here's why: I was working heavily on my SaaS (TurnShift, 100% Next.js). This time we'll talk about TypeScript. Whether you already use it or not with Next.js, I think you might learn something new.`,
    href: 'https://nextjsnews.com/4',
  },
  {
    title: 'Best practices for ecommerce sites in Google Search',
    description: `A critical challenge for any ecommerce website is being discovered in Search. Acquiring customers and building a relationship with them is an important driver of business growth, and Google can help shoppers discover your site at each stage in the shopping journey.`,
    href: 'https://developers.google.com/search/docs/advanced/ecommerce/overview',
  },
  {
    title: 'My Wonderful HTML Email Workflow',
    description: `A potent combination of MDX and MJML.`,
    href: 'https://www.joshwcomeau.com/react/wonderful-emails-with-mjml-and-mdx/',
  },
  {
    title: 'Creating a Markdown Blog Powered by Next.js in Under an Hour',
    description: `I’m pretty sure 99% of the developers out there just love markdown. It’s such a fantastic format to write in.`,
    href: 'https://blog.openreplay.com/creating-a-markdown-blog-powered-by-next-js-in-under-an-hour',
  },
  {
    title: 'How to Research Keywords: A Step-By-Step Guide for SEO',
    description: `Ranking in search results is not as complicated or mysterious as you’d think. In order to rank, a page must indicate its relevance and the website itself must be authoritative in the eyes of search engines.`,
    href: 'https://www.orbitmedia.com/blog/how-to-research-keywords-tips/',
  },
  {
    title: 'What is an SVG File?',
    description: `SVG stands for scalable vector graphics. It's a web-friendly vector-based file format used to render two-dimensional images on the internet .`,
    href: 'https://www.freecodecamp.org/news/what-is-an-svg-file/',
  },
  {
    title: 'Typography principles by Obys Agency',
    description: `Obys Agency shared a beautiful project featuring typography, UX, editorial design, and you name it. Why did they choose this topic? More complex work with typography is becoming popular in web and web design is becoming more like posters and graphic design. Obys agency is pleased to share with you some of their principles of working with typography that will help improve your experience.`,
    href: 'https://abduzeedo.com/typography-principles-obys-agency',
  },
  {
    title: '15 Psychological Studies That Will Boost Your Social Media Marketing',
    description: `How does your audience decide what it wants to click, share, favorite, and purchase?

    Understanding a bit of behavioral psychology can go a long ways toward a better understanding of your audience and why they do the things they do on social media and on your website.`,
    href: 'https://buffer.com/resources/psychological-studies-marketing/',
  },
  {
    title: '7 Social Media Psychology Studies That Will Make Your Marketing Smarter',
    description: `One of my favorite things about social media is that it’s still such a young and new form of communication. It feels too early to take anything as a given, so we’re all experimenting, testing and learning together.`,
    href: 'https://buffer.com/resources/social-media-psychology-studies-smarter-marketing/',
  },
  {
    title: 'The definition of marketing psychology and how to use it',
    description: `It’s safe to assume that in order for a marketer to successfully do their job, they first need to understand who the customer is, what they want, and what drives them to make a purchase. If it sounds a little like psychology, that’s because these strategies are based on psychological theories, and are commonly referred to as marketing psychology.`,
    href: 'https://www.canva.com/learn/definition-marketing-psychology-use/',
  },
  {
    title: '46 Psychological Marketing Examples for Smarter Marketing',
    description: `Your extensive guide to the best psychological principles we've seen is finally here.`,
    href: 'https://blog.crobox.com/article/psychological-marketing-examples',
  },
  {
    title: 'Marketing Psychology: The Art Of Influencing Your Customers',
    description: `Each person who interacts with your brand goes through a journey. Understanding the psychological factors impacting consumer behavior ensures your marketing is successful.`,
    href: 'https://marketsplash.com/marketing-psychology/',
  },
  {
    title: 'Marketing Psychology: 21 Key Principles of Human Behavior',
    description: `Smart marketers incorporate one or more psychological principles into marketing campaigns and marketing strategy, content marketing, and sales strategy.

    Here’s everything you need to know about the important principles and theories that can supercharge your marketing and influence people to buy your products or services.`,
    href: 'https://www.crowdspring.com/marketing-psychology/',
  },
  {
    title: 'Marketing Psychology: 10 Revealing Principles of Human Behavior',
    description: `One key part of being a great marketer is understanding how (and why) people think and act the way they do. It's much harder to create compelling content marketing, for example, if you don’t know why it would be compelling to your audience in the first place.`,
    href: 'https://blog.hubspot.com/marketing/psychology-marketers-revealing-principles-human-behavior/',
  },
  {
    title: 'How We Used a Video Course to Promote Ahrefs (And Got 500K+ Views)',
    description: `Creating and selling educational courses can be a lucrative business. But if you already have a product to sell, you can actually use courses as a marketing tool.`,
    href: 'https://ahrefs.com/blog/using-courses-for-marketing/',
  },
  {
    title: 'The Definitive Guide to Google Business Profile Optimization',
    description: `What you need to know to optimize your Google Business Profile (formerly Google My Business listing).`,
    href: 'https://whitespark.ca/google-business-profile-guide/',
  },
  {
    title: 'How To Become A Copywriter',
    description: `Copywriting is one of those rare skill sets that is both highly accessible AND highly lucrative.`,
    href: 'https://jacobmcmillen.com/how-to-become-a-copywriter/',
  },
  {
    title: 'Top JavaScript Concepts to Know Before Learning React',
    description: `If you want to learn React –or any JavaScript framework – you'll first need to understand the fundamental JavaScript methods and concepts.`,
    href: 'https://www.freecodecamp.org/news/top-javascript-concepts-to-know-before-learning-react/',
  },
  {
    title: 'The JavaScript Skills You Need For React (+ Practical Examples)React',
    description: `One of the most important things to understand about React is that it is fundamentally JavaScript. This means that the better you are at JavaScript, the more successful you will be with React.`,
    href: 'https://www.freecodecamp.org/news/javascript-skills-you-need-for-react-practical-examples/',
  },
  {
    title: 'From JavaScript to React',
    description: `Essential JavaScript for React.`,
    href: 'https://nextjs.org/learn/foundations/from-javascript-to-react/essential-javascript-react',
  },
]

export default bookmarksData
