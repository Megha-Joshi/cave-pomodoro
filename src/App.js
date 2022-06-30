import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/login-signup/login';
import { Signup } from './pages/login-signup/signup';
import { Navbar } from './components/Navbar/navbar';
import { Landingpage } from './pages/Landingpage/landingpage';
import { Homepage } from './pages/Homepage/homepage';
import { Timer } from './pages/Timer/timer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landingpage />}/>
        <Route path="/home" element={<Homepage />}/>
        <Route path="/timer/:taskID" element={<Timer />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </div>
  );
}

export default App;
