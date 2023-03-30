import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Experiencia from "./pages/Experiencia";
import PaginaPadrao from "./components/PaginaPadrao";
import Setores from "./pages/Setores";
import Informacoes from "./pages/Informacoes";
import IngressoForm from "./pages/IngressoForm";
import QRIngresso from "./pages/QRIngresso";
import NotFound from "./pages/NotFound";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="experiencia" element={<Experiencia />} />
          <Route path="setores" element={<Setores />} />
          <Route path="informacoes" element={<Informacoes />} />
          <Route path="ingresso" element={<IngressoForm />} />
          <Route path="qringresso" element={<QRIngresso />} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </Router>
  );
}
