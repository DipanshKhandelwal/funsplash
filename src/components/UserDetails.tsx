import React from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { IUserProfile } from "@/utils/types"

interface UserDetailsProps {
  user: IUserProfile
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  const router = useRouter()

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    if (router.asPath !== `/profile/${user.username}`) {
      router.push(`/profile/${user.username}`)
    }
  }

  return (
    <div
      className="flex flex-row items-center"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <Image
        key={user.id}
        src={user.profile_image?.small}
        width={30}
        height={30}
        alt="profile_image"
        className="rounded-full mr-2 hover:text-white"
      />
      <div className="text-sm text-gray-200 font-bold hover:text-white">
        {user.name}
      </div>
    </div>
  )
}

export default UserDetails
