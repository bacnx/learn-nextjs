import { useRouter } from "next/router"

export default function Post() {
  const router = useRouter()

  return <h2>Post id: {router.query.postId}</h2> }
