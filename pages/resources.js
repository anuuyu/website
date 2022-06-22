import siteMetadata from '@/data/siteMetadata'
import {
  toolsData,
  resourcesData,
  freeLearningResourcesData,
  premiumLearningResourcesData,
} from '@/data/toolsresourcesData'
import { CardsPage } from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Resources() {
  return (
    <>
      <PageSEO
        title={`Tools and resources - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Toos & Resources
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            awesome tools around the web
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {toolsData.map((d) => (
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
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            awesome resources around the web
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {resourcesData.map((d) => (
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
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            free learning Resources
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {freeLearningResourcesData.map((d) => (
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
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            premium learning resources
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {premiumLearningResourcesData.map((d) => (
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
      </div>
    </>
  )
}
