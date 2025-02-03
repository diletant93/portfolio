import { removeTheQuotes } from "@/utils/stringManipulations"
import { useEffect } from "react"

export function useThemeMode(){
  useEffect(() => {
    const theme: string | null = localStorage.getItem('theme')
    if (theme) {
      document.getElementById('root')?.classList.add(removeTheQuotes(theme))
    } else if (!window.matchMedia("(prefers-color-scheme:dark)")) {
      document.getElementById('root')?.classList.add('light')
    }else{
      document.getElementById('root')?.classList.add('dark')
    }
  }, [])//here should be the global value of the dark mode
}