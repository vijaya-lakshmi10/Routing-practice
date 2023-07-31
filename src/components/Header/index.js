// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'
const Header=()=>(
    <nav className="navbar">
    <div>
    <img src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png" alt="wave" className="logo-img"/>
    <h1 className="name">Wave</h1>
    </div>
    <div>
    <ul className="list-items">
    <li className="item">
    <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="item">
    <Link className="nav-link" to="/about">About</Link>
    </li>
    <li className="item">
    <Link className="nav-link" to="/contact">Contact</Link>
    </li>
    </ul>
    </div>
    </nav>
)
export default Header