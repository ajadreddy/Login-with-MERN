import React from 'react'
import "./login.css"
import { useHistory } from "react-router-dom"
const Forgot_pass = () => {
    const history = useHistory()
    const ResetPass = () => {
        history.push("/ResetPassword")
    }
  return (
    <div className="forgot-pass">
        <div className="avatar">
            <img className="avatar-img" src="https://aphy.research.vub.be/sites/default/files/styles/large/public/thumbnails/image/basic-profile-picture_5.jpg" alt="" />               
        </div>
        <div  >
            <h1 >Forgot your password?</h1>
            <p>Enter your email address. We will send you the reset link</p>
        </div>
        
        <div className="input">
        <input type="text" name="email" placeholder="Enter your Email"></input><br />
        <br />   
        {/* <input type="password" name="password"   placeholder="Enter your Password" ></input> */}
        </div>
        {/* <p>Forgot Password?</p> */}
        
        <div onClick={ResetPass} className="button"  >
            <h2>Send reset link</h2>
        </div>
        {/* <div>or</div>
        <div className="button" onClick={() => history.push("/register")}>Register</div> */}
    </div>
  )
}

export default Forgot_pass