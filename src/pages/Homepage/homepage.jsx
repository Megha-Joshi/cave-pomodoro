import { useState } from "react";
import { Navbar } from "../../components/Navbar/navbar";
import "./homepage.css";
import Modal from 'react-modal';
import { Link } from "react-router-dom";

const Homepage = () =>{

const [modal, setModal] = useState(false);
const customStyle = {
    overlay: {
      top: "6rem",
      backgroundColor: "rgba(52, 58, 64, 0.8)",
    },
    content: {
      width: "18rem",
    //   height: "20rem",
      margin: "5rem auto",
      backgroundColor: "var(--box-color)",
    },
  };
return(
<div className="App">
    <Navbar />
    <main>
        <section className="top-section">
            <h1 className="head">Welcome User!</h1>
            <h3 className="page-subhead">Add tasks to work on today</h3>
        </section>
        <section className="tasks-container">
            <p className="tasks-head">Tasks</p>
            <div className="tasks-list">
                <li className="task-name">Exercise</li>
                <div className="task-icon">
                    <span><i class="fas fa-edit icon-color"></i></span>
                    <span><i class="fas fa-trash-alt icon-color"></i></span>
                </div>
            </div>
            <div className="tasks-btn">
            <button class="float-btn float-action" onClick={() => setModal(true)}>
                    <span><i class="fal fa-plus"></i></span>
            </button>
            </div>
        </section>

        {
            modal && (
                <Modal isOpen={ modal } style={ customStyle }>
                    <header className="modal-header">
                        <h3 className="card-title">Create New Task</h3>
                        <i class="fas fa-times icon-color" onClick={() => setModal(false)}></i>
                    </header>
                    <main className="modal-subhead">
                        <input type="text" placeholder="Task Title" className="inp-box"/>
                        <textarea type="text" placeholder="Task Description" className="inp-box"></textarea>
                        <input type="number" placeholder="Time (minutes)" className="inp-box"/>
                        <Link to="/timer">
                        <button className="btn btn-info btn-text btn-modal">CREATE</button>
                        </Link>
                    </main>
                </Modal>
            )
        }
    </main>
</div>
)
}

export { Homepage };