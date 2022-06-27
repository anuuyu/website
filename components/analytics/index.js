import Posthog from './Posthog'
import siteMetadata from '@/data/siteMetadata'

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
  return <>{isProduction && siteMetadata.analytics.posthogAnalytics && <Posthog />}</>
}

export default Analytics
