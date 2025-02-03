import ToggleMode from "./features/ThemeMode/components/ToggleMode"
import { useThemeMode } from "./features/ThemeMode/hooks/useThemeMode"

function App() {
  useThemeMode();
  return (
    <div className="bg-primary" >
      <ToggleMode />
      <p className="text-secondary">Bob</p>
    </div>
  )
}

export default App
