import { useRouter } from 'next/navigation'
import { Box, Container, Stack, Button } from '@mui/material'
import { ROUTE_ITEMS } from './routes'
import NavLink from '../nav-link'
import { palette } from '@/utils'
import { useAuth } from '@/hooks'

function HeaderDesktop() {
  const router = useRouter()
  const { profile, logout } = useAuth()
  const isCurrentUser = Boolean(profile?.username)

  const routeItems = ROUTE_ITEMS.filter((item) => isCurrentUser || !item.requireLogin)

  const handleLogout = () => {
    logout()
    router.refresh()
  }

  return (
    <Box display={{ xs: 'none', sm: 'block' }} py={4}>
      <Container maxWidth="lg">
        <Stack direction="row" spacing={4} justifyContent="right" alignItems="center">
          {routeItems.map((route) => (
            <NavLink
              key={route.link}
              href={route.link}
              activeStyle={{ color: palette.primary.main }}
            >
              {route.title}
            </NavLink>
          ))}

          {!isCurrentUser ? (
            <Button variant="outlined" onClick={() => router.push('/login')}>
              Login
            </Button>
          ) : (
            <Button variant="outlined" onClick={handleLogout}>
              {profile.username}
            </Button>
          )}
        </Stack>
      </Container>
    </Box>
  )
}

export default HeaderDesktop
