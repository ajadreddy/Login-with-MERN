import React from 'react'
import { useHistory } from "react-router-dom"
const ResetPass = () => {
    const history = useHistory()
    const AfterReset = () => {
        history.push("/AfterReset")
    }
  return (
    <div className='reset-pass'>
        <div className="avatar">
            <img className="avatar-img" src="https://aphy.research.vub.be/sites/default/files/styles/large/public/thumbnails/image/basic-profile-picture_5.jpg" alt="" />               
        </div>
        <div  >
            <h1>Reset your password</h1>
            <p>Enter your new password.</p>
        </div>
        
        <div className="input">
        <input type="password" name="password"   placeholder="Enter your Password" ></input>
        <br/><br/>
        <input type="password" name="password"   placeholder="Re-enter your Password" ></input>
        </div>
        {/* <p>Forgot Password?</p> */}
        {/* <div  className="fpass">
            <p>Forgot password?</p>
        </div> */}
        <div onClick={AfterReset} className="button" >
            <h2>Reset</h2>
        </div>
    </div>
  )
}

export default ResetPass