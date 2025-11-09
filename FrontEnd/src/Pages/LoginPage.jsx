import { loginUser } from "./AuthService";
import "./WelcomePage.css";
import {FaUser,FaLock,FaEnvelope} from 'react-icons/fa';
import {Link,useNavigate} from "react-router-dom";

import { useState } from "react";

function LoginPage(){

const [email,setEmail] =useState('');
const [password,setPassword] = useState('');
const navigate = useNavigate();

const handleLogin = async(e)=>{
    e.preventDefault();

    try{
        const user = await loginUser({email,password});
        console.log('Logged in user', user);
        navigate('/dashboard');
    }catch(error){
        alert("Login failed. Try again");
    }
}

return(
    <div className="LoginPage">
        <div className="login">
            <form onSubmit={handleLogin} >
               <h1 style={{textAlign:"center",marginTop:"0px"}}>Login</h1>
          
              <div className="inputwrap">
              <FaEnvelope style={{marginTop:"25px"}}/><input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter your username" required/>
              </div>
              <div className="inputwrap">
                <FaLock  style={{marginTop:"25px"}}/><input value={password} onChange={(e)=>setPassword(e.target.value)} required type="password" placeholder="enter your password" />
              </div>
              <div className="remember">
               <label><input type="checkbox"/>Remember me</label>
               <a href="">forgot password?</a> 
              </div>

              <button type="submit">Login</button>

              <p style={{textAlign:"center"}}>Haven't registered yet?
                <Link to='/register'><span>create an account</span></Link></p>
            </form>
        </div>
    </div>
)
}

export default LoginPage