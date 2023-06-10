import { NextPageWithLayout } from '@/models'
import { MainLayout } from '@/components/layout'
import { Box, Container } from '@mui/material'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <h2>Home Page</h2>

      <Container maxWidth="sm" sx={{ bgcolor: 'primary.main' }}>
        MD Container
      </Container>
      <Container maxWidth="md" sx={{ bgcolor: 'secondary.main' }}>
        LG Container
      </Container>
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
