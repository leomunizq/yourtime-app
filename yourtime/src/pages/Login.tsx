import { Button } from "../components/Button";

import appleImg from '../assets/images/apple.svg';
import facebookImg from '../assets/images/facebook.svg';
import googleImg from '../assets/images/google.svg';
// import passwordImg from '../assets/images/password.svg';
// import userImg from '../assets/images/user.svg'

import '../styles/login.scss'


export function Login(){
  return (
    <div id="login-page">
    <main>
      <div className="container">
        <div className="header">
        <h1 id="left">.yourtime</h1>
        <h2 id="left">Sign in to <br/> To-do list is simple</h2>.
        <p id="left">If you don't have an account register <br/> You can <a href="#">Register here!</a></p>
        </div>
        <div className="form">
        <form>
          <input placeholder="Email" type="email" name="" /><br/>
          <input placeholder="Password" type="password" name=""  /><br/>
          <a id="right" href="">Forgot your password?</a>
        <Button>Login</Button>
        </form>
        </div>
        <div className="loginwith" >
          <p id="login">sign in with</p>
          <img src={appleImg} className="grow" alt="" />
          <img src={facebookImg} className="grow" alt="" />
          <img src={googleImg} className="grow" alt="" />
        </div>
      </div>
    </main>
    </div>
  );
}