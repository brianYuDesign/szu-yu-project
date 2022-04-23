import React from "react";
import Block from "../../components/Block";
import "./Cover.scss";

const Cover = () => {
  return (
    <Block>
      <div className="flex flex-wrap justify-center items-center">
        <div className="cover_profile flex justify-center items-center my-2">
          <div className="profile_img"></div>
        </div>
        <div className="flex flex-col justify-center flex-wrap">
          <div className="text-2xl  text-center font-bold ">
            余思佑Brian Yu CV
          </div>
          <div className="font-normal m-2">
            Hi, I'm Brian. a full-stack engineer working in Taipei
          </div>
        </div>
      </div>
    </Block>
  );
};

export default Cover;
