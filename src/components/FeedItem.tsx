import React from "react"
import Image from "next/image"
import { IFeedItem } from "@/utils/types"
import { useImageOverlay } from "@/store/overlay"
import UserDetails from "./UserDetails"

interface FeedItemProps {
  item: IFeedItem
}

const FeedItem: React.FC<FeedItemProps> = ({ item }) => {
  const { setOverlayItem } = useImageOverlay()

  const onClick = () => setOverlayItem(item)

  return (
    <div onClick={onClick} key={item.id} className="relative overflow-hidden">
      <div className="relative group">
        <Image
          key={item.id}
          src={item.urls.small}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
          width={500}
          height={300}
          alt={item.alt_description}
        />
        <div className="opacity-0 group-hover:opacity-100 cursor-default transition-opacity duration-200 absolute top-0 right-0 left-0 bottom-0 bg-[#0005]">
          <div className="absolute bottom-0 left-0 z-10 m-4 transition-transform duration-200 group-hover:translate-y-0 translate-y-full">
            <UserDetails user={item.user} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedItem
