import "./Header.css";
import { Link, Route, Routes } from "react-router-dom";
function Dropdown() {

    return (
        <>
            <div className="dropdown">
                <ul>
                    <Link to="/mercury"><li id="first-child"><div className="round mercury"></div>Mercury</li></Link>
                    <Link to="venus"><li><div className="round venus"></div>Venus</li></Link>
                    <Link to="earth"><li><div className="round earth"></div>Earth</li></Link>
                    <Link to="mars"><li><div className="round mars"></div>Mars</li></Link>
                    <Link to="jupiter"><li><div className="round jupiter"></div>Jupiter</li></Link>
                    <Link to="/saturn"><li><div className="round saturn"></div>Saturn</li></Link>
                    <Link to="/uranus"><li><div className="round uranus"></div>Uranus</li></Link>
                    <Link to="neptune"><li><div className="round neptune"></div>Neptune</li></Link>
                </ul>
            </div>
        </>
    )
}
export default Dropdown;