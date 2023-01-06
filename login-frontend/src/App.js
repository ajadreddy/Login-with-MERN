import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Home from "./components/home/Home"
import Login from './components/login/Login';
import Register from './components/register/Register';
import Forgot_pass from './components/login/Forgot_pass';
import ResetPass from './components/login/ResetPass';
import AfterReset from './components/login/AfterReset';
function App() {

  const [ user, setLoginUser] = useState({})

  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
            {
              user && user._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/forgotPassword">
            <Forgot_pass/>
          </Route>
          <Route path="/ResetPassword">
            <ResetPass/>
          </Route>
          <Route path="/AfterReset">
            <AfterReset/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
