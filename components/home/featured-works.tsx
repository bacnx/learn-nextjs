import { Work } from '@/models'
import { Box, Container, Typography } from '@mui/material'
import { WorkList } from '../common/work'

export function FeaturedWorksSection() {
  // fake api
  const workList: Work[] = [
    {
      id: 1,
      slug: 'slug',
      title: 'Design Dashboards',
      createdAt: 1687056449757,
      tags: ['Dashboard'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      imageUrl: 'https://picsum.photos/250/200',
      mdContent: '# No content',
      author: {
        name: 'author',
        title: 'dev',
      },
    },
    {
      id: 2,
      slug: 'slug',
      title: 'Vibrant Portraits of 2023',
      createdAt: 1687056449757,
      tags: ['Illustration'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      imageUrl: 'https://picsum.photos/250/200',
      mdContent: '# No content',
      author: {
        name: 'author',
        title: 'dev',
      },
    },
    {
      id: 3,
      slug: 'slug',
      title: '36 Days of Malayalam type',
      createdAt: 1687056449757,
      tags: ['Typography'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      imageUrl: 'https://picsum.photos/250/200',
      mdContent: '# No content',
      author: {
        name: 'author',
        title: 'dev',
      },
    },
  ]

  return (
    <Box pt={2} pb={10}>
      <Container>
        <Typography
          variant="h5"
          fontWeight="regular"
          fontSize={{ xs: 18, md: 22 }}
          textAlign={{ xs: 'center', md: 'left' }}
          pb={2}
        >
          Featured Works
        </Typography>

        <WorkList workList={workList} />
      </Container>
    </Box>
  )
}
