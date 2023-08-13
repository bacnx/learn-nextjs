import { Paper, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useAuth } from '@/hooks'
import { FormLogin } from '@/components/auth'
import type { LoginPayload } from '@/models'
import { palette } from '@/utils'
import Seo from '@/components/common/seo'

const Wrapper = styled(Paper)(() => ({
  borderRadius: 16,
  boxShadow: '4px 0 32px #0001',
}))

export default function LoginPage() {
  const { login } = useAuth({
    revalidateOnMount: false,
  })

  const handleLoginSubmit = async (payload: LoginPayload) => {
    try {
      await login(payload)
    } catch (error) {
      console.error('faild to login', error)
    }
  }

  return (
    <>
      <Seo title="Login" />
      <Stack
        height="100vh"
        justifyContent="center"
        alignItems="center"
        bgcolor={palette.primary.blur}
      >
        <Wrapper sx={{ maxWidth: 480, p: { xs: 4, md: 8 }, textAlign: 'center' }}>
          <Typography component="h1" variant="h4" fontWeight="bold">
            Wellcome back!
          </Typography>
          <Typography variant="subtitle1" color={palette.text.blur} sx={{ mb: 4 }}>
            Enter your username and password to login
          </Typography>

          <FormLogin onSubmit={handleLoginSubmit} />
        </Wrapper>
      </Stack>
    </>
  )
}
