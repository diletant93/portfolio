import { ToggleMode } from "./features/ThemeMode";
import { useThemeMode } from "./features/ThemeMode/hooks/useThemeMode"

function App() {
  useThemeMode();
  return (
    <div className="container" >
      <p>Hello</p>
    </div>
  )
}

export default App
