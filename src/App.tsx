import { Route, Routes } from "react-router-dom";
import { useThemeMode } from "./features/ThemeMode/hooks/useThemeMode"
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Abilities from "./pages/Abilities";
import Bio from "./pages/Bio";
import Prospects from "./pages/Prospects";
import PageNotFound from "./components/PageNotFound";

function App() {
  useThemeMode();
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/bio" element={<Bio/>}/>
        <Route path="/abilities" element={<Abilities/>}/>
        <Route path="/prospects" element={<Prospects/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Route>
    </Routes>
  )
}

export default App
