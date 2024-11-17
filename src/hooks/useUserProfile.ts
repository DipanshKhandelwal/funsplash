import { useEffect } from "react"
import { fetchUserProfile } from "@/utils/api"
import { useProfileData } from "@/store/profile"

const useUserProfile = (username: string) => {
  const {
    data: userProfile,
    loading,
    setLoading,
    setData: setUserProfile,
  } = useProfileData()

  useEffect(() => {
    const fetchData = async () => {
      if (username) {
        setLoading(true)
        try {
          const profile = await fetchUserProfile(username as string)
          setUserProfile(profile)
        } catch (error) {
          console.error(error)
        } finally {
          setLoading(false)
        }
      }
    }
    fetchData()
  }, [username, setUserProfile, setLoading])

  return { userProfile, loading }
}

export default useUserProfile
