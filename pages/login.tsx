import { useAuth } from '@/hooks'

export default function LoginPage() {
  const { profile, login, logout } = useAuth()

  async function handleLoginClick() {
    try {
      await login({
        username: 'test12',
        password: '123456',
      })
    } catch (error) {
      console.log('failed to login', error)
    }

    console.log('redirect to dashboard')
  }

  async function handleLogoutClick() {
    await logout()

    console.log('redirect to login page')
  }

  return (
    <>
      <h1>Login Page</h1>

      <p>{JSON.stringify(profile || {})}</p>

      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </>
  )
}
