import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Button, Container, SwipeableDrawer } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material'
import { ROUTE_ITEMS } from './routes'
import NavLink from '../nav-link'
import { useAuth } from '@/hooks'
import { palette } from '@/utils'

function HeaderMobile() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const [isCurrentUser, setIsCurrentUser] = useState<boolean>(false)
  const { profile, logout } = useAuth()
  const router = useRouter()

  const routeItems = ROUTE_ITEMS.filter((item) => isCurrentUser || !item.requireLogin)

  useEffect(() => {
    setIsCurrentUser(Boolean(profile?.username))
  }, [profile])

  const toggleDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer)
  }

  const handleLogout = () => {
    logout()
    router.refresh()
  }

  return (
    <Box display={{ xs: 'block', sm: 'none' }} py={2}>
      <Container sx={{ textAlign: 'right' }}>
        {!isCurrentUser && (
          <Button variant="outlined" onClick={() => router.push('/login')}>
            Login
          </Button>
        )}

        <Button sx={{ color: 'text.primary' }} onClick={toggleDrawer}>
          <MenuOutlined />
        </Button>

        <SwipeableDrawer
          anchor="right"
          open={isOpenDrawer}
          onOpen={toggleDrawer}
          onClose={toggleDrawer}
          onClick={toggleDrawer}
        >
          {routeItems.map((route) => (
            <NavLink
              key={route.link}
              href={route.link}
              sx={{ width: 240, px: 4, py: 1 }}
              activeStyle={{ color: palette.primary.main, backgroundColor: palette.primary.blur }}
            >
              {route.title}
            </NavLink>
          ))}
          {isCurrentUser && <Button onClick={handleLogout}>Logout</Button>}
        </SwipeableDrawer>
      </Container>
    </Box>
  )
}

export default HeaderMobile
