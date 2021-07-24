import React from "react"
import "./Cover.scss"

const Cover = () => {
  return (
    <div className="content_block flex flex-wrap justify-center s items-center">
      <div className="cover_profile flex justify-center items-center">
        <div className="profile_img animate-pulse"></div>
      </div>
      <div className="flex flex-col justify-center flex-wrap">
        <div className="text-2xl  text-center font-bold ">BrianYu CV</div>
        <div className="font-normal m-5">
          我從與人互動頻繁的活動圈栽進高級打字員的這條不歸路，用簡言易懂的方式寫code是我的風格
        </div>
      </div>
    </div>
  )
}

export default Cover
