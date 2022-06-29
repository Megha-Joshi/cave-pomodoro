import "./auth.css"
import { Link } from "react-router-dom";

const Signup = () => {
return (
<div className="App">
    <div class="login-container justify-align">
        <form class="form-container container">
            <h2 class="login-head">Signup</h2>
            <label for="username" class="input-text">Name</label><br />
            <input type="text" id="username" name="username" placeholder="Adarsh Balika" class="input-box title-content"
                required /><br />
            <label for="username" class="input-text">Email address</label><br />
            <input type="text" id="email" name="email" placeholder="abc@gmail.com" class="input-box title-content"
                required /><br />
            <label for="password" class="input-text">Password</label><br />
            <input type="password" id="password" name="password" placeholder="**********"
                class="input-box title-content" required />
            <label for="checkbox">
                <input type="checkbox" id="checkbox" name="checkbox" /> I accept all Terms and Conditions</label>
            <div>
                <Link to="/home">
                <button class="btn-info btn btn-text long-btn">Create new Account</button>
                </Link>
            </div>
            <div class="new-ac">
                <Link to="/login">
                <button class="btn-no-bg">Already have an Account</button>
                </Link>
            </div>
        </form>
    </div>
</div>
);
}

export{Signup};