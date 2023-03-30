import { NotFoundStyle } from "./style";

export default function NotFound() {
  return (
    <NotFoundStyle>
      <div className="number">
        <span>404</span>
      </div>
      <div className="text">
        <span>OOPS!</span>
        <p>Essa página não existe</p>
      </div>
    </NotFoundStyle>
  );
}
