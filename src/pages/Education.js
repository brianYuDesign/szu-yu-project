import React from "react"

const Education = () => {
  return (
    <div className="content_block shadow-md">
      <div className="text-xl text-center font-bold">Education</div>
      <div></div>
      <div className="flex flex-col">
        <div className="flex justify-between mr-5 ml-5 items-baseline">
          <div className="font-bold text-sm">中國科技大學資訊管理系</div>
          <div className="text-sm">2013~2017</div>
        </div>
        <div className="flex justify-between mr-5 ml-5 items-baseline">
          <div className="font-bold text-sm">IPAS 行動裝置程式設計師</div>
          <div className="text-sm">2017</div>
        </div>
        <div className="flex justify-between mr-5 ml-5 items-baseline">
          <div className="font-bold text-sm">70-483: Programming in C# </div>
          <div className="text-sm">2014</div>
        </div>
      </div>
    </div>
  )
}

export default Education
