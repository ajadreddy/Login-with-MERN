import React, {useState} from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import "./login.css"
const Login = ({ setLoginUser}) => {

    const history = useHistory()
    const forgotPass = () => {
        history.push("/forgotPassword")
    }
    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }

    return (
        <div className="login">
            <div className="avatar">
                <img className="avatar-img" src="https://aphy.research.vub.be/sites/default/files/styles/large/public/thumbnails/image/basic-profile-picture_5.jpg" alt="" />               
            </div>
            <div  >
                <h1 >Welcome!</h1>
                <p>Let's connect to your workspace. Please enter your credentials to continue.</p>
            </div>
            
            <div className="input">
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input><br />
            <br />
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            </div>
            {/* <p>Forgot Password?</p> */}
            <div onClick={forgotPass} className="fpass">
                <p>Forgot password?</p>
            </div>
            <div className="button"  onClick={login}>
                <h2>Sign In</h2>
            </div>
            {/* <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div> */}
        </div>
    )
}

export default Login