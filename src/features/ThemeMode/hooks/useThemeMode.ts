import { removeTheQuotes } from "@/utils/stringManipulations";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../themeModeSlice/selectors";
import { THEMES, THEMES_VALUES } from "../constants";


export function useThemeMode() {
  const theme = useSelector(selectTheme);
  console.log("here inside the theme", theme);
  useEffect(() => {
    const theme: string | null = localStorage.getItem("theme");

    const root = document.getElementById("root");
    root?.classList.remove(...THEMES_VALUES);

    if (theme) root?.classList.add(removeTheQuotes(theme));
    else if (window.matchMedia("(prefers-color-scheme:dark)"))
      root?.classList.add(THEMES.DARK);
    else root?.classList.add(THEMES.LIGHT);
  }, [theme]);
}
