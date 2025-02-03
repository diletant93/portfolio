import { useEffect } from "react"
import ToggleMode from "./components/ToggleMode"
import { removeTheQuotes } from "./utils/stringManipulations"
function useThemeMode(){
  useEffect(() => {
    const theme: string | null = localStorage.getItem('theme')
    if (theme) {
      document.getElementById('root')?.classList.add(removeTheQuotes(theme))
    } else if (!window.matchMedia("(prefers-color-scheme:dark)")) {
      document.getElementById('root')?.classList.add('light')
    }else{
      document.getElementById('root')?.classList.add('dark')
    }
  }, [])
}
function App() {
  useEffect(() => {
    const theme: string | null = localStorage.getItem('theme')
    if (theme) {
      document.getElementById('root')?.classList.add(theme)
    } else if (!window.matchMedia("(prefers-color-scheme:dark)")) {
      document.getElementById('root')?.classList.add('light')
    }else{
      document.getElementById('root')?.classList.add('dark')
    }
  }, [])
  return (
    <div className="bg-primary" >
      <ToggleMode/>
      <p className="text-secondary">Bob</p>
    </div>
  )
}

export default App
