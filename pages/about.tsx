import Link from 'next/link'
import { useRouter } from 'next/router'
import MyComponent from '@/components/common/MyComponent'
import { MainLayout } from '@/components/layout'
import { Button } from '@mui/material'

export default function About() {
  const router = useRouter()

  console.log(router.query)

  return (
    <>
      <h1>About Page</h1>
      <Link href="/">Click here to go to Home</Link>
      <MyComponent />

      <Button variant="outlined" color="secondary">
        Login
      </Button>
    </>
  )
}

About.Layout = MainLayout
