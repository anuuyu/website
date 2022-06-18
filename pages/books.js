import siteMetadata from '@/data/siteMetadata'
import booksData from '@/data/booksData'
import { BooksCard } from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Books() {
  return (
    <>
      <PageSEO title={`Books - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Books & e
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Books and e-books need to read
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {booksData.map((d) => (
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
      </div>
    </>
  )
}
