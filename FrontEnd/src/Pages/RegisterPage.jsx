import { useState } from "react";
import "./WelcomePage.css";
import {FaUser,FaLock, FaUsers, FaEnvelope} from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "./AuthService";

function RegisterPage(){
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

      const handleRegister = async(e)=>{
        e.preventDefault();
        try{
            const newUser = await registerUser({userName: username, password, email});
            console.log("Registered user:", newUser);
            alert("Registration is done.");
            navigate('/login');
        }catch(error){
            console.error("Registration error:", error);
            alert("Registration failed. Please try again");
        }
    };


return(
    <div className="LoginPage">
        <div className="register">
            <form onSubmit={handleRegister} >
               <h1 style={{textAlign:"center",marginTop:"0px"}}>Register</h1>
          
              <div className="inputwrap">
              <FaEnvelope style={{marginTop:"25px"}}/><input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              </div>
              <div className="inputwrap">
                <FaUser  style={{marginTop:"25px"}}/><input type="text" placeholder="enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
              </div>
              <div className="inputwrap">
                <FaLock  style={{marginTop:"25px"}}/><input type="password" placeholder="enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
              </div>
              <div className="remember">
               <label><input type="checkbox"/>Remember me</label>
               <a href="">forgot password?</a> 
              </div>

              <button type="submit">Register</button>

              <p style={{textAlign:"center"}}>Already have an account?<Link to='/login'><span>Login</span></Link></p>
            </form>
        </div>
    </div>
)
}

export default RegisterPage