import React from "react"
import Image from "next/image"
import { useImageOverlay } from "@/store/overlay"
import Loader from "./Loader"

const ImageOverlay: React.FC = () => {
  const { overlayItem, loading, setOverlayItem, setLoading } = useImageOverlay()

  if (!overlayItem) return null

  const onClose = () => setOverlayItem(null)
  const onLoadComplete = () => setLoading(false)

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-[1000]"
      onClick={onClose}
    >
      {loading && <Loader />}
      <Image
        src={overlayItem.urls.raw ?? ""}
        layout="fill"
        objectFit="contain"
        onLoad={onLoadComplete}
        alt={overlayItem.alt_description ?? ""}
      />
      <div className="absolute top-0 right-0 m-8 z-100">
        <button onClick={onClose} className="text-white text-4xl">
          x
        </button>
      </div>
    </div>
  )
}

export default ImageOverlay
