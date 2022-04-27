import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import Block from "../components/Block";

const Education = () => {
  return (
    <Block>
      <div className="text-xl text-center font-bold py-2">
        Education <FontAwesomeIcon icon={faSchool} />
      </div>
      <div className="flex flex-col mb-2">
        <div className="flex justify-between mr-5 ml-5 mt-3 items-baseline">
          <div className="font-bold text-sm flex-shrink-0">
            中國科技大學資訊管理系
          </div>
          <div className="text-sm">2013~2017</div>
        </div>
        <div className="flex justify-between mr-5 ml-5 mt-3 items-baseline">
          <div className="font-bold text-sm flex-shrink-0">
            IPAS 行動裝置程式設計師
          </div>
          <div className="text-sm">2017</div>
        </div>
        <div className="flex justify-between mr-5 ml-5 mt-3 items-baseline">
          <div className="font-bold text-sm flex-shrink-0">
            70-483: Programming in C#{" "}
          </div>
          <div className="text-sm">2014</div>
        </div>
      </div>
    </Block>
  );
};

export default Education;
