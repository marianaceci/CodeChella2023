import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { MainContainer } from "./style";

export default function PaginaPadrao() {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
}
