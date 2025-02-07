import { Route, Routes } from "react-router-dom";
import { useThemeMode } from "./features/ThemeMode/hooks/useThemeMode"
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Abilities from "./pages/Abilities";
import Bio from "./pages/Bio";
import Perspectives from "./pages/Perspectives";

function App() {
  useThemeMode();
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/bio" element={<Bio/>}/>
        <Route path="/abilities" element={<Abilities/>}/>
        <Route path="/perspectives" element={<Perspectives/>}/>
      </Route>
    </Routes>
  )
}

export default App
