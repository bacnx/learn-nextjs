import Link from 'next/link'
import { useRouter } from 'next/router'

export default function About() {
  const router = useRouter()

  console.log(router.query)

  return (
    <>
      <h1>About Page</h1>
      <Link href="/">Click here to go to Home</Link>
    </>
  )
}