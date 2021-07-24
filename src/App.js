import "./App.scss"
import Cover from "./pages/Cover/Cover"
import Education from "./pages/Education"
import Info from "./pages/Info"
import Skill from "./pages/Skill"
import Work from "./pages/Work"

function App() {
  return (
    <div className="container mx-auto px-4 App font-mono">
      <div className="grid grid-cols-1 gap-3 place-content-stretch items-center ">
        <div className="">
          <Cover />
        </div>
        <div className="grid grid-cols-1 gap-3 lg:grid lg:grid-rows-2 lg:grid-flow-col  lg:items-stretch">
          <div className="">
            <Info />
          </div>
          <div className="">
            <Education />
          </div>
          <div className="lg:col-span-2 lg:row-span-2 ">
            <Skill />
          </div>
        </div>
        <div className="">
          <Work />
        </div>
      </div>
    </div>
  )
}

export default App
