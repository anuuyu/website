import siteMetadata from '@/data/siteMetadata'
import bookmarksData from '@/data/bookmarksData'
import { BookmarksCard } from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import ScrollTop from '@/components/ScrollTop'

export default function Bookmarks() {
  return (
    <>
      <PageSEO
        title={`Bookmarks - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <ScrollTop />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            my bookmarks
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            interested article around the web.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {bookmarksData.map((d) => (
              <BookmarksCard
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
