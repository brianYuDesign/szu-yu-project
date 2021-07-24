import "./App.scss"
import Cover from "./pages/Cover/Cover"
import Education from "./pages/Education"
import Skill from "./pages/Skill"
import Work from "./pages/Work"

function App() {
  return (
    <div className="container mx-auto px-4 App font-mono">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="lg:col-span-2">
          <Cover />
        </div>
        <div className="lg:col-span-1">
          <Education />
        </div>
        <div className="lg:col-span-1">
          <Skill />
        </div>
        <div className="lg:col-span-2">
          <Work />
        </div>
      </div>
    </div>
  )
}

export default App
