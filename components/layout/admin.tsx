import Link from 'next/link'
import { LayoutProps } from '@/models'
import { useAuth } from '@/hooks'
import Auth from '../common/auth'

export function AdminLayout({ children }: LayoutProps) {
  const { profile, logout } = useAuth()

  return (
    <Auth>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/profile">{profile?.email}</Link>
        </li>
      </ul>
      <div>
        <button onClick={logout}>Logout</button>
      </div>

      {children}

      <div>Fotter</div>
    </Auth>
  )
}
