import {Link} from "react-router-dom"
import '../css/Navbar.css'

function Navbar() {

    return (
        <nav className="navbar">
            <div className="nav-brand">📂 MyFiles</div>
            <div className="nav-links">
                <Link to="/" className="nav-item">Upload File</Link>
                <Link to="/files" className="nav-item">View Files</Link>
            </div>
        </nav>
    )
}

export default Navbar;