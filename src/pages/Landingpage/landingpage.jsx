import { Navbar } from "../../components/Navbar/navbar";
import "../../root.css";
import "./landingpage.css";
import { Link } from "react-router-dom";

const Landingpage = () => {
return(
<div className="App">
<Navbar />
    <div className="main-container">
        <div className="left-container">
            <h1 className="heading">FOCUS CAVE</h1>
            <section className="content-section">
                <h2>Save your tasks by signing up!!! </h2>
                <p className="para-content title title-content"><i>Pomodoro enables you to deeply focus on your current task and accomplish it in the fastest and most creative way. </i></p>
                <div>
                    <Link to="/signup">
                    <button className="btn btn-info btn-text">JOIN NOW</button>
                    </Link>
                    <Link to="/login">
                    <button className="btn btn-info-outline btn-text">Already have an account?</button>
                    </Link>
                </div>
            </section>
        </div>
        <div className="right-container">
            <img src="home.svg" alt="Notes" className="home-img" />
        </div>
    </div>
</div>
)
}

export { Landingpage };