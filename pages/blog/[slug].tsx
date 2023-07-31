import { GetStaticPropsContext, GetStaticPaths, InferGetStaticPropsType } from 'next'
import { Container } from '@mui/material'
import styled from '@emotion/styled'
import MarkdownIt from 'markdown-it'
import highlightjs from 'markdown-it-highlightjs'
import { getPostList } from '@/utils'
import { MainLayout } from '@/components/layout'
import Seo from '@/components/common/seo'

const StyledMarkdown = styled.div`
  img {
    max-width: 100%;
    object-fit: cover;
  }
`

function BlogDetail({ work }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container maxWidth="md">
      <Seo title={work.title} />

      <h1>{work.title}</h1>
      <StyledMarkdown dangerouslySetInnerHTML={{ __html: work.htmlContent || '' }} />
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getPostList()
  const slugList = postList.map((post) => post.slug)

  return {
    paths: slugList.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params?.slug
  if (!slug) return { notFound: true }

  const postList = await getPostList()
  const slugPost = postList.find((post) => post.slug === slug)

  if (!slugPost) return { notFound: true }

  const md = new MarkdownIt('commonmark').use(highlightjs)

  const postWithHtmlContent = slugPost
  postWithHtmlContent.htmlContent = md.render(slugPost.mdContent)

  return {
    props: {
      work: postWithHtmlContent,
    },
  }
}

BlogDetail.Layout = MainLayout

export default BlogDetail
