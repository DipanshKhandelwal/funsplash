import { useRouter } from "next/router"
import Feed from "@/components/Feed"
import ProfileHeader from "@/components/ProfileHeader"

export default function Profile() {
  const router = useRouter()
  const { id: username = "" } = router.query

  return (
    <div className="flex justify-center bg-white">
      <div className="max-w-[1336px] p-4 flex flex-col w-full">
        <div className="flex self-center justify-center max-w-[700px]">
          <ProfileHeader username={username as string} />
        </div>
        <div className="my-4">
          <Feed username={username as string} />
        </div>
      </div>
    </div>
  )
}
