import { Outlet } from "react-router-dom";
import {MainContainer} from './style'

export default function PaginaPadrao() {
  return (
    <MainContainer>      
      <div className="container">
        <Outlet />
      </div>
    </MainContainer>
  );
}
