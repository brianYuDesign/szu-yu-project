import React from "react"
import { HiMoon, HiSun } from "react-icons/hi"
import { ThemeContext } from "../context/themeContext"

const ThemeToggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)
  const isDark = theme === "dark"
  const toggle = () => setTheme(isDark ? "light" : "dark")
  const label = isDark ? "切換為淺色模式" : "切換為深色模式"

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="transition duration-500 ease-in-out rounded-full p-2 bg-transparent border-0 cursor-pointer"
    >
      {isDark ? (
        <HiSun className="text-gray-500 dark:text-gray-400 text-2xl" />
      ) : (
        <HiMoon className="text-gray-500 dark:text-gray-400 text-2xl" />
      )}
    </button>
  )
}

export default ThemeToggle
