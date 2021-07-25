import React from "react"
import { HiMoon, HiSun } from "react-icons/hi"
import { ThemeContext } from "../context/themeContext"

const ThemeToggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  return (
    <div className="flex flex-row-reverse">
      <div className="transition duration-500 ease-in-out rounded-full p-2">
        {theme === "dark" ? (
          <HiSun
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
          />
        ) : (
          <HiMoon
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
          />
        )}
      </div>
    </div>
  )
}

export default ThemeToggle
