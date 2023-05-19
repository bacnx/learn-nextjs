import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'

interface PostProps {
  post: any
}

export default function Post({ post }: PostProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  if (!post) return null

  return (
    <>
      <h1>Post detail page</h1>

      <p>Post id: {post.id}</p>
      <p>Post title: {post.title}</p>
    </>
  )
}

export const getStaticPaths = async () => {
  console.log('getStaticPaths')

  const response = await fetch(
    'https://js-post-api.herokuapp.com/api/posts?_page=1'
  )
  const data = await response.json()

  return {
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<PostProps> = async (
  context: GetStaticPropsContext
) => {
  console.log('getStaticProps: ', context.params?.postId)
  const postId = context.params?.postId
  if (!postId) return { notFound: true }

  const response = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  )
  const data = await response.json()

  return {
    props: { post: { id: data.id, title: data.title } },
    revalidate: 5,
  }
}
