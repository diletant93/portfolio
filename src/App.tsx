import { Route, Routes } from "react-router-dom";
import { useThemeMode } from "./features/ThemeMode/hooks/useThemeMode"
import Layout from "./layouts/Layout";
import Home from "./pages/Home";

function App() {
  useThemeMode();
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
