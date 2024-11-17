import React from "react"

const ProfilePlaceholder: React.FC = () => {
  return (
    <div className="animate-pulse flex items-center space-x-4 mb-6 mr-60">
      <div className="w-[180] h-[180] rounded-full bg-gray-300"></div>
      <div>
        <div className="rounded animate-pulse bg-gray-400 h-12 w-80 m-2"></div>
        <div className="rounded animate-pulse bg-gray-400 h-6 w-80 m-2"></div>
        <div className="rounded animate-pulse bg-gray-400 h-6 w-80 m-2"></div>
      </div>
    </div>
  )
}

export default ProfilePlaceholder
