import { authConfig } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

const ProfilePage = async () => {
  const session = await getServerSession(authConfig)
  return (
    <div className="m-auto">
      Profile
      {session?.user?.image && <img className="rounded-3xl" src={session.user.image} alt="user image" />}
      <h1 className="text-3xl text-center">{session?.user?.name}</h1>
    </div>
  )
}

export default ProfilePage
