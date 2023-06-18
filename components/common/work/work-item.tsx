import { Work } from '@/models'
import { Box, Stack, Typography } from '@mui/material'

export interface WorkItemProps {
  post: Work
}

export function WorkItem({ post }: WorkItemProps) {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <Box
        component="img"
        src={post.imageUrl}
        alt={post.title}
        width={{ xs: '100%', md: 246 }}
        height={{ xs: 230, md: 180 }}
        sx={{ objectFit: 'cover', borderRadius: 2 }}
      />
      <Box>
        <Typography variant="h4" fontWeight="bold">
          {post.title}
        </Typography>
        <Typography mt={{ xs: 1.5, md: 2 }}>
          <Typography
            variant="caption"
            fontSize={{ xs: 14, md: 12 }}
            fontWeight="bold"
            px={0.8}
            mr={2}
            sx={{ display: 'inline-block', bgcolor: 'dark.main', color: 'white', borderRadius: 99 }}
          >
            {post.createdAt}
          </Typography>
          <Typography variant="caption" fontSize={{ xs: 14, md: 12 }} color="light.main">
            {post.tags[0]}
          </Typography>
        </Typography>
        <Typography variant="body2" mt={{ xs: 3, md: 4 }}>
          {post.description}
        </Typography>
      </Box>
    </Stack>
  )
}
