import Seo from '@/components/common/seo'
import { MainLayout } from '@/components/layout'
import { Box } from '@mui/material'

function WorksPage() {
  return (
    <Box>
      <Seo title="Works | NextJS Tutorial" />
      <h2>Works Page</h2>
    </Box>
  )
}

WorksPage.Layout = MainLayout

export default WorksPage
