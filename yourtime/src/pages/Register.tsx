import '../styles/register.scss'

import { Button } from "../components/Button";
import appleImg from '../assets/images/apple.svg';
import facebookImg from '../assets/images/facebook.svg';
import googleImg from '../assets/images/google.svg';

export function Register(){
  return(
    <div id="register-page">
<div className="container">
  <h1> .yourtime</h1>
  <h2>Create an<br/>account</h2>
  <form>
          <input placeholder="Email" type="email" name="" /><br/>
          <input placeholder="Password" type="password" name=""  /><br/>
          <input placeholder="Confirm Password" type="password" name=""  /><br/>
          <p>By clicking the Register button, you agree to the public offer</p>
        
        <Button>Register</Button>
        </form>
        <div className="loginwith" >
          <p id="login">sign in with</p>
          <img src={appleImg} className="grow" alt="" />
          <img src={facebookImg} className="grow" alt="" />
          <img src={googleImg} className="grow" alt="" />
        </div>

      </div>
      </div>
  )
}