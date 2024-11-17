import { useCallback, useEffect } from "react"
import { fetchFeed, fetchUserPhotos } from "@/utils/api"
import { useFeedData } from "@/store/feed"

export function useFetchPhotos(username?: string) {
  const {
    data: photos,
    loading,
    page,
    addData,
    resetData,
    setLoading,
  } = useFeedData()

  const fetchMoreData = useCallback(
    async (reset?: boolean) => {
      const dataPage = reset ? 1 : page

      setLoading(true)
      try {
        const data = username
          ? await fetchUserPhotos(username, dataPage)
          : await fetchFeed(dataPage)
        addData(data, dataPage + 1)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    },
    [page, setLoading, username, addData]
  )

  useEffect(() => {
    async function init() {
      resetData()
      fetchMoreData(true)
    }

    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username])

  return { photos, loading, fetchMoreData }
}
