import React from "react";
import { useTranslation } from "react-i18next";

const Summary = () => {
  const { t } = useTranslation("cover");
  const { t: tc } = useTranslation("common");

  const paragraphs = (t("description.intro") || "").split("\n\n");
  const metrics = t("metrics", { returnObjects: true }) || [];

  return (
    <section className="sec" id="summary">
      <div className="sec__h">
        <h2>{tc("ui.summaryTitle")}</h2>
      </div>

      <div className="summary">
        {paragraphs.map((p, i) => (
          <p key={`intro_${i}`}>{p}</p>
        ))}
      </div>

      {metrics.length > 0 && (
        <div className="metrics">
          {metrics.map((m, i) => (
            <div className="metric" key={`metric_${i}`}>
              <div className="metric__v">
                {m.value}
                {m.unit ? <em> {m.unit}</em> : null}
              </div>
              <div className="metric__k">{m.label}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Summary;
