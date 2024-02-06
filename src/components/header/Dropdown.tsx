import "./Header.css";
import { Link } from "react-router-dom";
type DropdownProps = {
  show: boolean;
  setShow: any;
};
function Dropdown({ show, setShow }: DropdownProps) {
  
  return (
    <>
      <div className="dropdown">
        <ul>
          <Link to="/mercury">
            <li id="first-child" onClick={() => setShow(false)}>
              <div className="round mercury"></div>Mercury
            </li>
          </Link>
          <Link to="venus">
            <li onClick={() => setShow(false)}>
              <div className="round venus"></div>Venus
            </li>
          </Link>
          <Link to="earth">
            <li onClick={() => setShow(false)}>
              <div className="round earth"></div>Earth
            </li>
          </Link>
          <Link to="mars">
            <li onClick={() => setShow(false)}>
              <div className="round mars"></div>Mars
            </li>
          </Link>
          <Link to="jupiter">
            <li onClick={() => setShow(false)}>
              <div className="round jupiter"></div>Jupiter
            </li>
          </Link>
          <Link to="/saturn">
            <li onClick={() => setShow(false)}>
              <div className="round saturn"></div>Saturn
            </li>
          </Link>
          <Link to="/uranus">
            <li onClick={() => setShow(false)}>
              <div className="round uranus"></div>Uranus
            </li>
          </Link>
          <Link to="neptune">
            <li onClick={() => setShow(false)}>
              <div className="round neptune"></div>Neptune
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
export default Dropdown;
