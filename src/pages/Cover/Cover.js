import React from "react"
import "./Cover.scss"

const Cover = () => {
  return (
    <div className="content_block flex flex-wrap justify-center s items-center">
      <div className="cover_profile flex justify-center items-center my-2">
        <div className="profile_img animate-pulse"></div>
      </div>
      <div className="flex flex-col justify-center flex-wrap">
        <div className="text-2xl  text-center font-bold ">BrianYu CV</div>
        <div className="font-normal m-2">
          Hi, I'm Brian a full-stack engineer working at YT
        </div>
      </div>
    </div>
  )
}

export default Cover
