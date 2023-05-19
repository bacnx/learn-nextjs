import Link from 'next/link'
import { LayoutProps } from '@/models'

export function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      {children}
      <div>Fotter</div>
    </>
  )
}
