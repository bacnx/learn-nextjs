import { NextPageWithLayout } from '@/models'
import { MainLayout } from '@/components/layout'
import { Box } from '@mui/material'
import { FeaturedWorksSection, HeroSection, RecentPostsSection } from '@/components/home'
import Seo from '@/components/common/seo'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Seo title="Home | NextJS Tutorial" />

      <HeroSection />
      <RecentPostsSection />
      <FeaturedWorksSection />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
