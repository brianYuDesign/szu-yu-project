import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import coffeechat from "../img/coffeechat.jpg";
import boundapp from "../img/boundapp.jpg";
import sugarbee from "../img/sugarbee.jpg";
import gamilive from "../img/gamilive.jpg";

const projectImages = { coffeechat, boundapp, sugarbee, gamilive };

const ARCHIVE_PREVIEW = 4;

const Project = () => {
  const { t } = useTranslation("project");
  const { t: tc } = useTranslation("common");
  const [expanded, setExpanded] = useState(false);

  const items = t("items", { returnObjects: true }) || [];
  const archiveItems = t("archiveItems", { returnObjects: true });
  const archive = Array.isArray(archiveItems) ? archiveItems : [];
  const rest = Math.max(0, archive.length - ARCHIVE_PREVIEW);

  return (
    <>
      <section className="sec" id="works">
        <div className="sec__h">
          <h2>{t("title")}</h2>
          <span className="count">{tc("ui.countItems", { count: items.length })}</span>
        </div>

        <div>
          {items.map((item, index) => {
            const img = item.imgKey && projectImages[item.imgKey];
            return (
              <article className="work" key={`project_${index}`}>
                {img ? (
                  <div className="work__shot">
                    <img src={img} alt={item.name} loading="lazy" />
                  </div>
                ) : (
                  <div className="work__blank">
                    <span>{tc("ui.unpublished")}</span>
                  </div>
                )}

                <div>
                  <div className="work__top">
                    {item.link ? (
                      <a
                        className="work__n"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <span className="work__n">{item.name}</span>
                    )}
                    <span className="work__tag">
                      {item.link ? tc("ui.live") : tc("ui.poc")}
                    </span>
                  </div>
                  <p className="work__d">{item.content}</p>
                  {Array.isArray(item.tech) && (
                    <div className="work__tech">{item.tech.join("、")}</div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {archive.length > 0 && (
        <section className="sec" id="archive">
          <div className="sec__h">
            <h2>{t("archiveTitle")}</h2>
            <span className="count">
              {tc("ui.countItems", { count: archive.length })}
            </span>
          </div>

          <div>
            {archive.map((item, index) => (
              <div
                className="old"
                key={`archive_${index}`}
                hidden={!expanded && index >= ARCHIVE_PREVIEW}
              >
                <div className="old__top">
                  {item.link ? (
                    <a
                      className="old__n"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <span className="old__n">{item.name}</span>
                  )}
                  {Array.isArray(item.tech) && (
                    <span className="old__t">{item.tech.join("、")}</span>
                  )}
                </div>
                <p className="old__d">{item.content}</p>
              </div>
            ))}
          </div>

          {rest > 0 && (
            <button
              type="button"
              className="more"
              aria-expanded={expanded}
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded
                ? tc("ui.showLess")
                : tc("ui.showMore", { count: rest })}
            </button>
          )}
        </section>
      )}
    </>
  );
};

export default Project;
