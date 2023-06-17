import { Box, Button, Container, SwipeableDrawer } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material'
import { useState } from 'react'
import ROUTE_ITEMS from './routes'
import NavLink from '../nav-link'
import { palette } from '@/utils'

function HeaderMobile() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)

  const toggleDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer)
  }

  return (
    <Box display={{ xs: 'block', sm: 'none' }} py={2}>
      <Container sx={{ textAlign: 'right' }}>
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
          {ROUTE_ITEMS.map((route) => (
            <NavLink
              key={route.link}
              href={route.link}
              sx={{ width: 240, px: 4, py: 1 }}
              activeStyle={{ color: palette.primary.main, backgroundColor: palette.primary.blur }}
            >
              {route.title}
            </NavLink>
          ))}
        </SwipeableDrawer>
      </Container>
    </Box>
  )
}

export default HeaderMobile
