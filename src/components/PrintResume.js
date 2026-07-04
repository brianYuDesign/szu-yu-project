import React from "react";
import { useTranslation } from "react-i18next";
import profileImg from "../img/profile.jpg";
import "./PrintResume.scss";

const PrintResume = () => {
  const { i18n } = useTranslation();
  const g = (ns) => i18n.getFixedT(i18n.language, ns);

  const cover = g("cover");
  const name = (cover("title") || "").replace(/\s*cv\s*$/i, "").trim();
  const role = cover("subtitle");
  const contact = g("info")("items", { returnObjects: true }) || [];
  const whyme = g("whyme")("items", { returnObjects: true }) || [];
  const work = g("work")("items", { returnObjects: true }) || [];
  const education = g("education")("items", { returnObjects: true }) || [];
  const skill = g("skill")("items", { returnObjects: true }) || [];

  return (
    <div className="print-resume" aria-hidden="true">
      {/* Header */}
      <header className="pr-head">
        <img className="pr-photo" src={profileImg} alt={name} />
        <div className="pr-head-main">
          <h1 className="pr-name">
            {name} <span className="pr-role">{role}</span>
          </h1>
          <div className="pr-contact">
            <div className="pr-cv">CV</div>
            {contact.map((c, i) => (
              <div key={i} className="pr-contact-line">
                {c.label}: {c.value}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Why Me */}
      {whyme.length > 0 && (
        <section className="pr-section">
          <h2 className="pr-title">{g("whyme")("title")}</h2>
          <ul className="pr-bullets">
            {whyme.map((it, i) => (
              <li key={i}>
                <strong>{it.title}</strong>
                {it.description ? `：${it.description}` : ""}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Experience */}
      {work.length > 0 && (
        <section className="pr-section">
          <h2 className="pr-title">{g("work")("title")}</h2>
          {work.map((job, i) => (
            <div className="pr-item" key={i}>
              <div className="pr-item-head">
                {job.companyName} - {job.jobTitle}，{job.period}
              </div>
              {Array.isArray(job.jobDesc) ? (
                <ul className="pr-bullets">
                  {job.jobDesc.map((d, di) => (
                    <li key={di} dangerouslySetInnerHTML={{ __html: d }} />
                  ))}
                </ul>
              ) : (
                <p className="pr-p">{job.jobDesc}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="pr-section">
          <h2 className="pr-title">{g("education")("title")}</h2>
          {education.map((e, i) => (
            <div className="pr-edu" key={i}>
              <span className="pr-edu-school">{e.school}</span>
              <span className="pr-edu-period">{e.period}</span>
            </div>
          ))}
        </section>
      )}

      {/* Skill */}
      {skill.length > 0 && (
        <section className="pr-section">
          <h2 className="pr-title">{g("skill")("title")}</h2>
          <ul className="pr-bullets">
            {skill.map((sk, i) => (
              <li key={i}>
                <strong>{sk.title}</strong>
                {sk.content ? `: ${sk.content}` : ""}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default PrintResume;
