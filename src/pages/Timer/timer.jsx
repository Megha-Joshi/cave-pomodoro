import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import "./timer.css";
import { Navbar } from "../../components/Navbar/navbar";
import { useEffect, useState, useRef } from "react";
import { useTask } from "../../context/task-context";
import { useParams } from "react-router-dom";

const Timer = () => {

    const timerColor = "var(--accent-color)";
    const {taskID} = useParams();
    const { tasks } = useTask(); 
    const [pause, setPause] = useState(true);
    const [ remainingSec, setRemainingSec] = useState(0);
    const [ mode, setMode ] = useState("work");

    const pauseRef = useRef(pause);
    const remainingSecRef = useRef(remainingSec);
    const modeRef = useRef(mode);

    const currTask = tasks.find((task) => task.id === taskID);

    const initialTimer = () => {
        remainingSecRef.current =
			mode === "work" ? currTask.duration * 60 : currTask.break*60;
        setRemainingSec(remainingSecRef.current);
    }

    const nextTimer = () => {
        const nextMode = modeRef.current === "work" ? "break" : "work";
        const currSeconds = nextMode === "work" ? currTask.duration * 60 : currTask.break*60;
        setMode(nextMode);
        modeRef.current = nextMode;
        setRemainingSec(currSeconds);
        remainingSecRef.current = currSeconds;
    }

    const tick = () => {
        remainingSecRef.current--;
        setRemainingSec(remainingSecRef.current);
    }

    useEffect ( () =>{
        initialTimer();

        const interval = setInterval(() => {
            if(pauseRef.current){
                return;
            }
            if(remainingSecRef.current === 0){
                return nextTimer();
            }
            tick();
        }, 1000)
        return () => clearInterval(interval);
    }, [currTask, mode]);

    const totalSeconds = mode === "work" ? currTask.duration * 60 : currTask.break*60;
    const percentage = Math.round(remainingSec/totalSeconds  * 100);

    const minutes = Math.floor(remainingSec / 60);
    let seconds = Math.floor(remainingSec % 60);
    if(seconds<10)seconds = "0" + seconds;

    useEffect(() => {
		document.title = minutes + " : " + seconds;
	}, [minutes, seconds]);
    return(
        <div className="App">
            <Navbar />
            <main className="main-section">
                <div className="main-cont">
                <section className="left-section">
                    <div className="clock-section">
                    <CircularProgressbar value={percentage} styles={buildStyles({
                        textColor: "var(--font-color)",
                        pathColor: timerColor,
                        trailColor: "rgb(255,255,255,0.2)",
                    })} text={minutes + ":" + seconds} strokeWidth={5}/>
                    </div>
                    <div className="clock-icons">

                    {pause ? 
                    <span><i class="fad fa-play fa-2x" onClick={() => (setPause(false), pauseRef.current = false)}></i></span> :
                    <span><i class="fad fa-pause fa-2x" onClick={() => (setPause(true), pauseRef.current = true)}></i></span>
                    }
                    <span><i class="fad fa-redo fa-2x" onClick={() => initialTimer()}></i></span>
                    </div>
                </section>
                <section className="right-section">
                    <h1 className="right-head">{currTask.name}</h1>
                    <p className="right-desc">{currTask.description}</p>
                    <p className="right-desc">{currTask.duration} minute</p>
                    <button className="btn btn-info btn-text" onClick={() => setMode("work")}>FOCUS</button>
                    <button className="btn btn-info btn-text" onClick={() => setMode("break")}>BREAK</button>
                    <p className="right-desc mode-color">Mode: {mode === "work" ? "Work" : "Break"}</p>
                </section>
                </div>
            </main>
        </div>
    )
}

export { Timer };