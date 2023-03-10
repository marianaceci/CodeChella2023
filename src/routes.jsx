import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Experiencia from "./pages/Experiencia";
import Header from "./components/Header";
import PaginaPadrao from "./components/PaginaPadrao";
import Footer from "./components/Footer";
import Setores from "./pages/Setores";
import Informacoes from "./pages/Informacoes";
import SeuIngresso from "./pages/SeuIngresso";

export default function AppRouter() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Home />} />
            <Route path="experiencia" element={<Experiencia />} />
            <Route path="setores" element={<Setores />} />
            <Route path="informacoes" element={<Informacoes />} />
            <Route path="ingresso" element={<SeuIngresso />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
  );
}
