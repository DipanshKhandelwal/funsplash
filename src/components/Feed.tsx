import { Masonry } from "react-plock"
import InfiniteScroll from "react-infinite-scroll-component"
import FeedItem from "@/components/FeedItem"
import { IFeedItem } from "@/utils/types"
import { useFetchPhotos } from "@/hooks/useFetchPhotos"
import { MASONRY_CONFIG } from "@/utils/common"
import FeedPlaceholder from "./placeholders/FeedPlaceholder"
import Loader from "./Loader"
import ImageOverlay from "./ImageOverlay"

interface FeedProps {
  username?: string
}

export default function Feed({ username }: FeedProps) {
  const { photos, loading, fetchMoreData } = useFetchPhotos(username)

  if (photos.length == 0 && loading) return <FeedPlaceholder />

  return (
    <>
      <InfiniteScroll
        hasMore
        dataLength={photos.length}
        next={() => fetchMoreData()}
        loader={<Loader />}
      >
        <Masonry<IFeedItem>
          items={photos}
          config={MASONRY_CONFIG}
          render={(item) => <FeedItem item={item} />}
        />
      </InfiniteScroll>
      <ImageOverlay />
    </>
  )
}
