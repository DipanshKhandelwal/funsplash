import React from "react"

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center my-3">
      <svg
        className="animate-spin h-5 w-5 mr-3 bg-gray-400 rounded"
        viewBox="0 0 24 24"
      ></svg>
    </div>
  )
}

export default Loader
