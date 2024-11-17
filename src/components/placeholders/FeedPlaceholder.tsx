import React from "react"
import Image from "next/image"
import { Masonry } from "react-plock"

const MASONRY_CONFIG = {
  columns: [1, 2, 3],
  gap: [48, 24, 12],
  media: [640, 768, 1024],
}

const PLACEHOLDER_URL =
  "https://images.unsplash.com/photo-1515923152115-758a6b16f35e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzMxODE2MzgzfA\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080"

function FeedPlaceholder() {
  return (
    <Masonry
      items={Array.from({ length: 6 }, (_, i) => i + 1)}
      config={MASONRY_CONFIG}
      render={(index) => (
        <div key={index} className="animate-pulse relative">
          <div className="relative group bg-[#9999]">
            <Image
              src={PLACEHOLDER_URL}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
              width={500}
              height={300}
              className="opacity-10 w-full h-auto"
              alt="placeholder"
            />
          </div>
        </div>
      )}
    />
  )
}

export default FeedPlaceholder
