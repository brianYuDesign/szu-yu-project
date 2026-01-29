import Cover from "./pages/Cover/Cover";
import Education from "./pages/Education";
import Info from "./pages/Info";
import Skill from "./pages/Skill";
import Work from "./pages/Work";
import WhyMe from "./pages/WhyMe";
import Project from "./pages/Project";
import "./App.scss";
import ThemeToggle from "./components/ThemeToggle";
import LanguageSelector from "./components/LanguageSelector";
import Aos from "aos";
import "aos/dist/aos.css";
import "./i18n";

function App() {
  Aos.init();
  return (
    <div className="container mx-auto px-4 py-2 font-semi App">
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <LanguageSelector />
        <ThemeToggle />
      </div>
      <div className=" mx-lg-4">
        <div className="grid grid-cols-1 gap-3  items-center">
          <div data-aos="fade-up" data-aos-duration="1000" className="">
            <Cover x />
          </div>
          <div className="grid grid-cols-1 gap-3   xl:grid-flow-col xl:auto-cols-max">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="xl:col-span-2"
            >
              <Info />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="xl:col-span-2"
            >
              <Education />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="xl:row-span-2 "
            >
              <Skill />
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="">
            <WhyMe />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="">
            <Work />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="">
            <Project />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
