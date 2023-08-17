import React, { useState } from "react"
import './login.css'
import laptop from "./images/laptop.jpg"
import {BiSolidUserCircle} from "react-icons/bi";
import {RiLockPasswordFill} from "react-icons/ri";
import {Link} from "react-router-dom"
const Login1 =()=>{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[message,setMessage]=useState("");
    console.log("Login");
    
    const onLogin =()=>{
        if(username==="viji"&& password==="2003"){
            console.log("Login success");
            setMessage("Login success")
        }else{
            setMessage("Login failure")
        }
    }
 return(
    <html lang="en">
  <head>
    <meta charset='UTF-8'/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Login form</title>
  </head>
  <body>
    <div className="main">
        <img src={laptop} className="image"/>
        <div className="login">
            <h2>Login here</h2>
            <form action="#" onSubmit={onLogin}>
                <div className="input">
                    <span className="icon"><BiSolidUserCircle/></span>
         <input type="text" className="form-control"name="username"value={username} placeholder="Username" onChange={(e)=> setUsername(e.target.value)} />
                <br />
                <span className="icon"><RiLockPasswordFill/></span>
                    <input type="text" className="form-control"name="password"value={password}placeholder="password"onChange={(e)=> setPassword(e.target.value)}  />
                <br />
                <div className="forgot">
                 <p>
                    <a href="#">Forgot Password</a>
                    </p>
                </div>
                <br />
                <div className="btn">
                    <button type= "submit"><Link to="/login">
                    Login</Link></button>
                    {message && <div> {message}</div>}
                </div>
                </div>
            </form>
        </div>
    </div>
    
    </body>
    </html>
 )
 
}
export default Login1;