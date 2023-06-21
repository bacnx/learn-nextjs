import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Box, Link, Stack, Typography } from '@mui/material'

const CONTACT_INFOS = [
  {
    Icon: Facebook,
    href: '#',
  },
  {
    Icon: Instagram,
    href: '#',
  },
  {
    Icon: LinkedIn,
    href: '#',
  },
  {
    Icon: Twitter,
    href: '#',
  },
]

function Footer() {
  return (
    <Box component="footer" py={2} textAlign="center">
      <Stack direction="row" display="inline-block" spacing={4}>
        {CONTACT_INFOS.map(({ href, Icon }, index) => (
          <Link key={index} component="a" href={href} target="_blank" rel="noopener noreferrer">
            <Icon sx={{ fontSize: 48 }} />
          </Link>
        ))}
      </Stack>
      <Typography fontSize={14} mt={2} mb={4}>
        Copyright ©{new Date().getFullYear()} All rights reserved
      </Typography>
    </Box>
  )
}

export default Footer
