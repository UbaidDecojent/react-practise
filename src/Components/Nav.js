import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <ul className="nav-list">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/about">About</Link></li>
                <li className="nav-item"><Link to="/adduser">Add Users</Link></li>
                <li className="nav-item"><Link to="">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Nav;