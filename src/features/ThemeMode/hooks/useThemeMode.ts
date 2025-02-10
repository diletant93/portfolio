import { removeTheQuotes } from "@/utils/stringManipulations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../themeModeSlice/selectors";
import { THEMES_VALUES } from "../constants/themes";
import { AppDispatch } from "@/store/store";
import { setTheme } from "../themeModeSlice/slice";
import { THEMES } from "../types";

export function useThemeMode() {
    const themeFromRedux = useSelector(selectTheme);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        const root = document.body;
        if (!root) return;

        // Remove existing theme classes
        root.classList.remove(...THEMES_VALUES);

        // Get theme from storage
        const themeFromStorage = localStorage.getItem("theme");
        
        // Determine which theme to apply
        let themeToApply: string | null = null;
        
        if (themeFromStorage) {
            const cleanTheme = removeTheQuotes(themeFromStorage);
            if (THEMES_VALUES.includes(cleanTheme as THEMES)) {
                themeToApply = cleanTheme;
            }
        }

        // If no valid theme from storage, use system preference
        if (!themeToApply) {
            themeToApply = window.matchMedia("(prefers-color-scheme: dark)").matches 
                ? THEMES.DARK 
                : THEMES.LIGHT;
        }

        // Apply theme
            root.classList.add(themeToApply);
            dispatch(setTheme(themeToApply))
        
    }, [themeFromRedux,dispatch]);
}