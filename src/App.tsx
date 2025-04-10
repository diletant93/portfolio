import { Route, Routes } from "react-router-dom";
import { useThemeMode } from "./features/ThemeMode/hooks/useThemeMode"
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
const Layout = lazy(() => import('./layouts/Layout'));
const Home = lazy(() => import('./pages/Home'));
const Abilities = lazy(() => import('./pages/Abilities'));
const Bio = lazy(() => import('./pages/Bio'));
const Prospects = lazy(() => import('./pages/Prospects'));
const PageNotFound = lazy(() => import('./components/PageNotFound'));

function App() {
  useThemeMode();
  return (
    <Suspense fallback={<div className="h-[100vh] w-full"><Loader /></div>}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/abilities" element={<Abilities />} />
          <Route path="/prospects" element={<Prospects />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
