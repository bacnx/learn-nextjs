import { GetStaticProps } from 'next'
import Link from 'next/link'

interface Post {
  id: number
  title: string
}

interface PostProps {
  posts: Post[]
}

export default function Post({ posts }: PostProps) {
  return (
    <>
      <h1>Post Page</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps<PostProps> = async () => {
  const response = await fetch(
    'https://js-post-api.herokuapp.com/api/posts?_page=1'
  )
  const data = await response.json()

  return {
    props: {
      posts: data.data.map((x: any) => ({
        id: x.id,
        title: x.title,
      })),
    },
  }
}
