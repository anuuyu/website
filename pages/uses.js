import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'UsesLayout'

export async function getStaticProps() {
  const usesDetails = await getFileBySlug('uses', ['uses'])
  return { props: { usesDetails } }
}

export default function uses({ usesDetails }) {
  const { mdxSource, frontMatter } = usesDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
