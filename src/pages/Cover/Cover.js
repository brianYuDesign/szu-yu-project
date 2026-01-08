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
        <div className="flex flex-col justify-center flex-wrap w-full">
          <div className="text-2xl text-center font-bold mb-4">
            余思佑Brian Yu CV
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 font-normal px-4 md:px-6 max-w-4xl mx-auto">
            <div className="leading-relaxed text-sm md:text-base">
              With 8 years of software development experience, 3 years of
              project and technical management experience, leading an 11-person
              technical team to develop 12 game products.
            </div>
            <div className="leading-relaxed text-sm md:text-base">
              Specializing in production issues, business refactoring,
              performance optimization, and improving system quality.
            </div>
          </div>
        </div>
      </div>
    </Block>
  );
};

export default Cover;
