import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function PageA() {
  return <h1>PAGE A</h1>
}

function PageB() {
  return <h1>PAGE B</h1>
}


function PaginaPadrao() {
  return (
    <div>
      <p>bem vindo</p>

      <Outlet />

      <footer>só um exemplo</footer>
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />} >
          <Route path="a" element={<PageA />}  />
          <Route path="b" element={<PageB />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}