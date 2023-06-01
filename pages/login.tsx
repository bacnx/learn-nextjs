import { authApi } from '@/api-client'

export default function LoginPage() {
  async function handleLoginClick() {
    await authApi
      .login({
        username: 'abcdtest',
        password: '12346',
      })
      .catch((error) => {
        console.log('login fail', error)
      })
  }

  async function handleLogoutClick() {
    await authApi.logout()
  }

  async function handleGetProfileClick() {
    await authApi.getProfile()
  }

  return (
    <>
      <h1>Login Page</h1>

      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleLogoutClick}>Logout</button>
      <button onClick={handleGetProfileClick}>Get profile</button>
    </>
  )
}
