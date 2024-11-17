const GITHUB_PROFILE_LINK = "https://github.com/DipanshKhandelwal"

export default function Footer() {
  return (
    <footer className="text-gray-600 row-start-3 flex gap-6 flex-wrap items-center justify-center m-8">
      <p className="text-center">
        Built with ❤️ by{" "}
        <a
          href={GITHUB_PROFILE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline"
        >
          Dipansh Khandelwal
        </a>
      </p>
    </footer>
  )
}
