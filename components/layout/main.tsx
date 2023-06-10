import { LayoutProps } from '@/models'
import { Box, Stack } from '@mui/material'
import Header from '../common/header'
import Footer from '../common/footer'

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Stack>
  )
}
