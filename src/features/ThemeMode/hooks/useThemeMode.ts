import { removeTheQuotes } from "@/utils/stringManipulations";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../themeModeSlice/selectors";
import { THEMES, THEMES_VALUES } from "../constants/themes";

export function useThemeMode() {
    const themeFromRedux = useSelector(selectTheme);
    
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
        if (themeToApply) {
            root.classList.add(themeToApply);
        }
        
    }, [themeFromRedux]);
}