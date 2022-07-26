import siteMetadata from '@/data/siteMetadata'
import * as bmData from '@/data/bookmarksData'
import { BookmarksCard, BooksCard, CardsPage, ToolsPage, Card } from '@/components/Card'
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
          <p className="text-xl leading-7 text-gray-500 dark:text-gray-400">
            interested and usefull things i found on internet.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {bmData.bookmarksData.map((d) => (
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
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Books and e-books need to read
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {bmData.booksData.map((d) => (
              <BooksCard
                key={d.title}
                title={d.title}
                description={d.description}
                author={d.author}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Challenges I've been and are currently doing
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {bmData.challengesData.map((d) => (
              <CardsPage
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h3 className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            free learning Resources
          </h3>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {bmData.toolsData.map((d) => (
              <ToolsPage
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            premium learning resources
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {bmData.resourcesData.map((d) => (
              <ToolsPage
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            awesome tools around the web
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {bmData.freeLearningResourcesData.map((d) => (
              <ToolsPage
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            awesome resources around the web
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {bmData.premiumLearningResourcesData.map((d) => (
              <ToolsPage
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            i followed a lot awesome people on twitter, this my highlight.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {bmData.twlinksData.map((d) => (
              <Card
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
