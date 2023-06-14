import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { CSSProperties, ReactNode } from 'react'

export type NavLinkProps = MuiLinkProps &
  LinkProps & {
    activeStyle?: CSSProperties
    children: ReactNode
  }

function NavLink({ href, children, activeStyle, ...props }: NavLinkProps) {
  const router = useRouter()
  const isActive = router.pathname === href

  return (
    <MuiLink component={Link} href={href} style={isActive ? activeStyle : {}} {...props}>
      {children}
    </MuiLink>
  )
}

export default NavLink
