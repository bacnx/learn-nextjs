import { AdminLayout } from '@/components/layout'
import { useAuth } from '@/hooks'
import { NextPageWithLayout } from '@/models'

const Profile: NextPageWithLayout = () => {
  const { profile } = useAuth()

  return (
    <div>
      <h1>Profile page</h1>

      <p>Name: {profile?.username}</p>
      <p>Email: {profile?.email}</p>
      <p>City: {profile?.city}</p>
    </div>
  )
}

Profile.Layout = AdminLayout

export default Profile
