import Image from "next/image"
import { useRouter } from "next/router"

export default function Header() {
  const router = useRouter()
  const handleClick = () => router.push("/")

  return (
    <div
      className="flex items-center px-8 py-4 text-gray-900 text-3xl font-semibold font-sans shadow-2xl border-b cursor-pointer"
      onClick={handleClick}
    >
      <Image
        src="/funsplash.png"
        alt="Funsplash"
        width={36}
        height={36}
        className="mr-1.5"
      />
      <span className="ml-2">Funsplash</span>
    </div>
  )
}
