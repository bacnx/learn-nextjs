import { Box, Container, Stack } from '@mui/material'
import ROUTE_ITEMS from './routes'
import NavLink from '../nav-link'
import { palette } from '@/utils'

function HeaderDesktop() {
  return (
    <Box display={{ xs: 'none', sm: 'block' }} py={4}>
      <Container maxWidth="lg">
        <Stack direction="row" spacing={4} justifyContent="right">
          {ROUTE_ITEMS.map((route) => (
            <NavLink
              key={route.link}
              href={route.link}
              activeStyle={{ color: palette.primary.main }}
            >
              {route.title}
            </NavLink>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default HeaderDesktop
