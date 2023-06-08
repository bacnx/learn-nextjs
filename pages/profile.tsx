import Auth from '@/components/auth'
import { MainLayout } from '@/components/layout'
import { useAuth } from '@/hooks'
import { NextPageWithLayout } from '@/models'

const Profile: NextPageWithLayout = () => {
  const { profile } = useAuth()

  return (
    <Auth>
      <h1>Profile page</h1>

      <p>Name: {profile?.username}</p>
      <p>Email: {profile?.email}</p>
      <p>City: {profile?.city}</p>
    </Auth>
  )
}

Profile.Layout = MainLayout

export default Profile
