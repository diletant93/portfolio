import { ToggleMode } from "./features/ThemeMode";
import { useThemeMode } from "./features/ThemeMode/hooks/useThemeMode"

function App() {
  useThemeMode();
  return (
    <div className="font-bold" >
     <ToggleMode/>
     <h1 className="heading">Heading</h1>
    </div>
  )
}

export default App
