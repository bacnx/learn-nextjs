import { NextPageWithLayout } from '@/models'
import { MainLayout } from '@/components/layout'
import { Box } from '@mui/material'
import { FeaturedWorksSection, HeroSection, RecentPostsSection } from '@/components/home'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
      <RecentPostsSection />
      <FeaturedWorksSection />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
