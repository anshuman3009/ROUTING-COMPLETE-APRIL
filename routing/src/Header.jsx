import { Link, NavLink } from "react-router-dom";
import "./design.css";
function Header()
{
    return (
        <>
        <div>
            <ul>
                {/* <a href="/cab"><li>CAB</li></a> */}
                <NavLink to="/cab"><li>CAB</li></NavLink>

                {/* <a href="/hotels"><li>HOTEL</li></a> */}
                <Link to="/hotels"><li>HOTEL</li></Link>

                <a href="/trains"><li>TRAINS</li></a>
            </ul>
        </div>
        </>
    )
}

export default Header;