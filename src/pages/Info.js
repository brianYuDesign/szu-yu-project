import React from "react"

const Info = () => {
  return (
    <div className="content_block shadow-md">
      <div className="text-xl text-center font-bold">Info</div>
      <div></div>
      <div className="flex flex-col ">
        <div className="flex justify-between mr-5 ml-5 items-baseline">
          <div className="font-bold text-sm">Birth</div>
          <div className="text-sm">1994/11/21</div>
        </div>
        <div className="flex justify-between mr-5 ml-5 items-baseline">
          <div className="font-bold text-sm">Phone</div>
          <div className="text-sm">
            <a href="tel:+886961134525">+886961134525</a>
          </div>
        </div>
        <div className="flex justify-between mr-5 ml-5 items-baseline">
          <div className="font-bold text-sm">Email</div>
          <div className="text-sm">
            <a href={"mailto:brian831121@gmail.com"}> brian831121@gmail.com</a>
          </div>
        </div>
        <div className="flex justify-between mr-5 ml-5 items-baseline">
          <div className="font-bold text-sm">LineId</div>
          <div className="text-sm">brian831121</div>
        </div>
      </div>
    </div>
  )
}

export default Info
