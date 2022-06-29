import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import "./timer.css";
import { Navbar } from "../../components/Navbar/navbar";

const Timer = () => {

    const timerColor = "var(--accent-color)";
    return(
        <div className="App">
            <Navbar />
            <main className="main-section">
                <div className="main-cont">
                <section className="left-section">
                    <div className="clock-section">
                    <CircularProgressbar value={60} styles={buildStyles({
                        textColor: "var(--font-color)",
                        pathColor: timerColor,
                        trailColor: "rgb(255,255,255,0.2)",
                    })} text={`60%`} strokeWidth={5}/>
                    </div>
                    <div className="clock-icons">
                    <span><i class="fad fa-play"></i></span>
                    <span><i class="fad fa-pause"></i></span>
                    <span><i class="fad fa-redo"></i></span>
                    </div>
                </section>
                <section className="right-section">
                    <h1 className="right-head">Exercise</h1>
                    <p className="right-desc">10 weighted squats, 10 lunges daily</p>
                    <button className="btn btn-info btn-text">FOCUS</button>
                    <button className="btn btn-info btn-text">SHORT</button>
                    <button className="btn btn-info btn-text">LONG</button>
                </section>
                </div>
            </main>
        </div>
    )
}

export { Timer };