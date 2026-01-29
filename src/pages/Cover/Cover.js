import React from "react";
import { useTranslation } from "react-i18next";

import "./Cover.scss";
import profileImg from "../../img/profile.jpg";

const Cover = () => {
  const { t } = useTranslation("cover");

  return (
    <div className="cover_container">
      <div className="cover_content_wrapper">
        <div className="cover_text_section">
          <h1>{t("title")}</h1>
          <div className="subtitle">
            Backend Developer / System Development Lead
          </div>

          <div className="description_grid">
            <div className="desc_item">
              <p>{t("description.intro")}</p>
            </div>
            <div className="desc_item">
              <p>{t("description.specialization")}</p>
            </div>
          </div>
        </div>

        <div className="cover_profile_section">
          <div className="profile_img_container">
            <img
              src={profileImg}
              alt="Brian Yu Profile"
              className="profile_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
