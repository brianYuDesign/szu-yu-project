import React from "react";
import { useTranslation } from "react-i18next";

import Nav from "./components/Nav";
import Header from "./pages/Header";
import Summary from "./pages/Summary";
import Info from "./pages/Info";
import Skill from "./pages/Skill";
import Education from "./pages/Education";
import WhyMe from "./pages/WhyMe";
import Work from "./pages/Work";
import Project from "./pages/Project";

import "./i18n";

const Footer = () => {
  const { t } = useTranslation("cover");
  const { t: ti } = useTranslation("info");
  const { t: tc } = useTranslation("common");

  const name = (t("title") || "").replace(/\s*cv\s*$/i, "").trim();
  const items = ti("items", { returnObjects: true }) || [];
  const linked = items.filter((i) => i.link);

  return (
    <footer className="foot">
      {name}
      {linked.map((item) => (
        <React.Fragment key={item.label}>
          {" · "}
          <a className="link" href={item.link}>
            {item.value}
          </a>
        </React.Fragment>
      ))}
      {" · "}
      {tc("ui.updatedAt")}
    </footer>
  );
};

function App() {
  return (
    <>
      <Nav />
      <div className="page">
        <Header />

        <div className="body">
          <aside className="side">
            <Info />
            <Skill />
            <Education />
          </aside>

          <main className="main">
            <Summary />
            <WhyMe />
            <Work />
            <Project />
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
