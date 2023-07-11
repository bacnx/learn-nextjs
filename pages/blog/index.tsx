import { MainLayout } from '@/components/layout'
import { Box, Container, Typography, Stack, Divider } from '@mui/material'
import { getPostList } from '@/utils'
import { Work, WorkSmall } from '@/models'
import { BlogItem } from '@/components/blog'

interface BlogPageProps {
  posts: WorkSmall[]
}

function BlogPage({ posts }: BlogPageProps) {
  return (
    <Box>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight="bold">
          Blogs
        </Typography>

        <Stack mt={1} divider={<Divider flexItem />}>
          {posts.map((post) => (
            <BlogItem key={post.id} data={post} />
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

BlogPage.Layout = MainLayout

export async function getStaticProps() {
  const data = await getPostList()

  return {
    props: {
      posts: data.map(
        ({ id, slug, title, imageUrl, createdAt, tags, description }: Work): WorkSmall => ({
          id,
          slug,
          title,
          imageUrl: imageUrl || null,
          createdAt,
          tags,
          description,
        })
      ),
    },
  }
}

export default BlogPage
