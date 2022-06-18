import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { footerNavLinks } from '@/data/navLinks'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="8" />
          <SocialIcon kind="github" href={siteMetadata.github} size="8" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="8" />
          <SocialIcon kind="codepen" href={siteMetadata.codepen} size="8" />
          <SocialIcon kind="devto" href={siteMetadata.devto} size="8" />
        </div>
        <div className="mb-3 flex flex-wrap justify-center space-x-4">
          {footerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  )
}
