// to add a theme we need:
//                      a) add a constant to the enum
//                      b) add the .theme to the globals.css
export enum THEMES {
  LIGHT = "light",
  DARK = "dark",
}

export const THEMES_VALUES = Object.values(THEMES);
  