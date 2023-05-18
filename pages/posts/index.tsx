import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()

  console.log(router.query)

  return (
    <>
      <h1>Post Page</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
