import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () =>{
return(
<div className="App">
    <nav class="navi-head-section justify-align">
        <Link to="/" className="left-navi-section">
        <p>FOCUS CAVE</p>
        </Link>
        <div class="right-navi-section">
            <span><i class="fas fa-moon"></i></span>
        </div>
    </nav>
</div>
)
}

export { Navbar }