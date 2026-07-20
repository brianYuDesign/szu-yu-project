import React from "react"

const Block = ({ className = "", children }) => {
  return (
    <div
      className={`bg-white dark:bg-black content_block shadow-xl ${className}`.trim()}
    >
      {children}
    </div>
  )
}

export default Block
