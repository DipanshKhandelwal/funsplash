import Image from "next/image"
import { LocationIcon } from "@/utils/icons"
import useUserProfile from "@/hooks/useUserProfile"
import ProfilePlaceholder from "./placeholders/ProfilePlaceholder"

const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button className="bg-gray-200 text-sm text-gray-600 px-4 py-1 rounded hover:bg-gray-300 transition duration-200 ease-in-out">
    {children}
  </button>
)

interface ProfileHeaderProps {
  username: string
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ username }) => {
  const { userProfile, loading } = useUserProfile(username)

  if (loading || !userProfile) return <ProfilePlaceholder />

  return (
    <div className="flex items-start space-x-4 my-6 mt-10">
      <Image
        src={userProfile.profile_image.large}
        alt={userProfile.name}
        width={220}
        height={220}
        className="rounded-full"
      />
      <div>
        <h1 className="text-4xl font-bold text-gray-900">{userProfile.name}</h1>
        <p className="text-gray-500 mb-3">@{userProfile.username}</p>
        <p className="text-gray-700 text-sm">{userProfile.bio ?? "-"}</p>
        <div className="flex items-center text-gray-500 text-sm my-2">
          <LocationIcon />
          <p className="ml-1">{userProfile.location}</p>
        </div>
        <div className="flex space-x-4 mb-6 my-4">
          <Button>Subscribe</Button>
          <Button>Message</Button>
          <Button>More</Button>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
