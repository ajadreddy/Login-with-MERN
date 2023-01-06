import React from 'react'
import { useHistory } from "react-router-dom"
const AfterReset = () => {

    const history = useHistory()
    const login = () => {
        history.push("/")
    }

  return (
    <div className='after-reset'>
        <div className="avatar">
            <img className="avatar-img" src="https://aphy.research.vub.be/sites/default/files/styles/large/public/thumbnails/image/basic-profile-picture_5.jpg" alt="" />               
        </div>
        <div>
            {/* <h1 >Reset your password</h1> */}
            <p>Your password has been reset . Login with new password.</p>
        </div>
        
        <div onClick={login} className="button" >
            <h2>Login</h2>
        </div>
    </div>
  )
}

export default AfterReset