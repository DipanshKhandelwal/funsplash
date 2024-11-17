import Feed from "@/components/Feed"

export default function Home() {
  return (
    <div className="flex justify-center bg-white">
      <div className="max-w-[1336px] p-4 w-full">
        <div className="my-4">
          <Feed />
        </div>
      </div>
    </div>
  )
}
