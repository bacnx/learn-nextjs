import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import avatar from '@/images/avatar.png'
import { palette } from '@/utils'

export function HeroSection() {
  return (
    <Box component="section" pt={{ xs: 4, md: 20 }} pb={{ xs: 7, md: 11 }}>
      <Container>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          spacing={{ xs: 4, md: 14 }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
        >
          <Stack
            alignItems={{ xs: 'center', md: 'flex-start' }}
            maxWidth={506}
            textAlign={{ xs: 'center', md: 'left' }}
          >
            <Typography variant="h3" fontWeight="bold" fontSize={{ lg: 44 }}>
              Hi, I am John, <br />
              Creative Technologist
            </Typography>
            <Typography mt={{ xs: 2.5, md: 5 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </Typography>
            <Button variant="contained" size="large" sx={{ mt: { xs: 3.5, md: 7 }, fontSize: 20 }}>
              Download Resume
            </Button>
          </Stack>

          <Box
            component={Image}
            src={avatar}
            width={{ xs: 180, md: 243 }}
            height={{ xs: 180, md: 243 }}
            alt="avatar"
            sx={{
              objectFit: 'cover',
              borderRadius: '50%',
              boxShadow: `-4px 8px ${palette.secondary.light}`,
            }}
          />
        </Stack>
      </Container>
    </Box>
  )
}
