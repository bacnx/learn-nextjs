import { Box } from '@mui/material'
import Link from 'next/link'

function Header() {
  return (
    <Box component="header" py={2}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </Box>
  )
}

export default Header
