import { Link } from "react-router-dom"
import './Navbar.css'

export function Navbar () {
    return (
        <div classname= "NavBar">
            <div className="Navbar-button">
                <Link to= "/"><button>Home</button></Link>
                <Link to= "/LoginSignup"><button>LoginSignup</button></Link>
                <Link to= "/Search"><button>Search</button></Link>
                <Link></Link>
            </div>
        </div>
    )
}
