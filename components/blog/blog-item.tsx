import Link from 'next/link'
import { useRouter } from 'next/router'
import { Box, Typography, Stack, Divider } from '@mui/material'
import moment from 'moment'
import { WorkSmall } from '@/models'

interface BlogItemProps {
  data: WorkSmall
}

function BlogItem({ data }: BlogItemProps) {
  const router = useRouter()

  const handleToDetail = () => {
    router.push(`/blog/${data.slug}`)
  }

  return (
    <Box my={4} sx={{ cursor: 'pointer' }} onClick={handleToDetail}>
      <Typography variant="h5" fontWeight="bold">
        {data.title}
      </Typography>

      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem sx={{ borderColor: 'text.primary' }} />}
        spacing={2}
        mt={1}
      >
        <Typography variant="body1">{moment(data.createdAt).format('DD MMM YYYY')}</Typography>
        <Typography variant="body1" color="GrayText">
          {data.tags.join(', ')}
        </Typography>
      </Stack>

      <Typography variant="body2" mt={1}>
        {data.description}
      </Typography>
    </Box>
  )
}

export default BlogItem
