import React from "react"

const Block = props => {
  return (
    <div className="bg-white dark:bg-black content_block shadow-xl">
      {props.children}
    </div>
  )
}

export default Block
