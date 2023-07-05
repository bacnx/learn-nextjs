import { MainLayout } from '@/components/layout'
import { Box } from '@mui/material'
import { getPostList } from '@/utils'

function BlogPage({ posts }: any) {
  console.log(posts)

  return (
    <Box>
      <h2>Blog Page</h2>
    </Box>
  )
}

BlogPage.Layout = MainLayout

export async function getStaticProps() {
  const data = await getPostList()

  return {
    props: {
      posts: data.map((post: any) => ({
        id: post.id,
        title: post.title,
        description: post.description,
      })),
    },
  }
}

export default BlogPage
