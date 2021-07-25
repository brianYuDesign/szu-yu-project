import Cover from "./pages/Cover/Cover"
import Education from "./pages/Education"
import Info from "./pages/Info"
import Skill from "./pages/Skill"
import Work from "./pages/Work"
import "./App.scss"

function App() {
  return (
    <div className=" mx-auto px-4 py-4  font-semibold bg-gradient-to-r from-red-400 to-blue-500">
      <div className="grid grid-cols-1 gap-3 place-content-stretch items-center ">
        <div className="">
          <Cover />
        </div>
        <div className="grid grid-cols-1 gap-3   xl:grid-flow-col xl:auto-cols-max">
          <div className="xl:col-span-2">
            <Info />
          </div>
          <div className="xl:col-span-2">
            <Education />
          </div>
          <div className="xl:row-span-2 ">
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