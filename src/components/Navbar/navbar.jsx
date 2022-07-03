import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme-context";
import "./navbar.css";

const Navbar = () =>{

const { theme, setTheme} = useTheme();
return(
<div className="App">
    <nav class="navi-head-section justify-align">
        <Link to="/" className="left-navi-section">
        <p>FOCUS CAVE</p>
        </Link>
        <div class="right-navi-section">
            {theme === "light" ? (
            <button onClick={()=> setTheme("dark")}><i class="fas fa-moon fa-2x"> </i></button>
            ) : (
            <button onClick={()=> setTheme("light")}><i class="fad fa-sun fa-2x"></i></button>
            )}


        </div>
    </nav>
</div>
)
}

export { Navbar }