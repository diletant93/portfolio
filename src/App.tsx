import ToggleMode from "./components/ToggleMode"
import { useThemeMode } from "./hooks/useThemeMode"

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
