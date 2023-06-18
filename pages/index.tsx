import { NextPageWithLayout } from '@/models'
import { MainLayout } from '@/components/layout'
import { Box } from '@mui/material'
import { HeroSection, RecentPostsSection } from '@/components/home'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
      <RecentPostsSection />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
