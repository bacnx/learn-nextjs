import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material'

function Post() {
  return (
    <Box borderRadius={4} bgcolor="white" p={{ xs: 2.5, md: 3 }} boxShadow="0 4px 16px #0001">
      <Typography variant="h5" fontWeight="bold">
        Making a design system from scratch
      </Typography>
      <Stack direction="row" spacing={2} mt={{ xs: 1.5, md: 2 }}>
        <Typography>12 Feb 2020</Typography>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Typography>Design, Pattern</Typography>
      </Stack>
      <Typography mt={{ xs: 2.5, md: 1.5 }}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </Typography>
    </Box>
  )
}

export function RecentPostsSection() {
  return (
    <Box component="section" py={{ xs: 3.5, md: 4 }} bgcolor="secondary.light">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          pb={2}
        >
          <Typography variant="h5" fontWeight="regular" fontSize={{ xs: 18, md: 22 }}>
            Recent posts
          </Typography>
          <Button variant="text" color="secondary" sx={{ display: { xs: 'none', md: 'block' } }}>
            View all
          </Button>
        </Stack>

        <Stack
          spacing={{ xs: 2, md: 0 }}
          justifyContent={{ md: 'space-between' }}
          alignItems="baseline"
          flexWrap="wrap"
          flexDirection="row"
        >
          <Box maxWidth={{ xs: '100%', md: '49%' }}>
            <Post />
          </Box>
          <Box maxWidth={{ xs: '100%', md: '49%' }}>
            <Post />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
