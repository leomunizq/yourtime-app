import React from 'react'

import { useState } from 'react'

import { useAuth } from '../context/AuthContext'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom'

import { Snackbar, Slide } from '@mui/material'

import MuiAlert, { AlertProps } from '@mui/material/Alert'

import '../styles/login.scss'

import appleImg from '../assets/images/apple.svg'
import facebookImg from '../assets/images/facebook.svg'
import googleImg from '../assets/images/google.svg'

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [isSubmitting, setIsSubmitting] = useState(false)

  async function handlenRegister() {
    navigate('/register')
  }

  //Snackbar erro notification
  const [errei, setErrei] = useState(null)

  const [open, setOpen] = useState(false)

  const handleSnack = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  })

  const {
    login,
    currentUser,
    onAuthStateChanged,
    signInWithGoogle,
    signInWithFacebook
  } = useAuth()

  return (
    <div id="login-page">
      <main>
        <div className="container">
          <div className="header">
            <h1 id="left">.yourtime</h1>
            <h2 id="left">
              Sign in to <br /> To-do list is simple
            </h2>
            .
            <p id="left">
              If you don't have an account register <br /> You can{' '}
              <a onClick={handlenRegister}>Register here!</a>
            </p>
          </div>
          <div className="form">
            <form
              onSubmit={async e => {
                e.preventDefault()

                if (!email || !password) {
                  setErrei('Credentials Not Valid')
                  handleSnack()
                  return
                }

                login(email, password)
                  .then(res => {
                    navigate('/principal')
                    console.log(currentUser)
                  })
                  .catch(error => {
                    console.log(error.message)
                    setErrei(error.message)
                    handleSnack()
                  })
              }}
            >
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                name="email"
                autoComplete="email"
                required
              />
              <br />
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                name="password"
                required
              />
              <br />
              <a id="right" href="">
                Forgot your password?
              </a>
              <Button type="submit">Login</Button>
            </form>
          </div>
          <div className="loginwith">
            <p id="login">sign in with</p>
            <img src={appleImg} className="grow" alt="" />
            <img
              onClick={() => {
                signInWithFacebook()
                  .then(user => navigate('/principal'))
                  .catch(error => console.log(error))
              }}
              src={facebookImg}
              className="grow"
              alt=""
            />
            <img
              onClick={() => {
                signInWithGoogle()
                  .then(user => navigate('/principal'))
                  .catch(error => console.log(error))
              }}
              src={googleImg}
              className="grow"
              alt=""
            />
          </div>
        </div>
      </main>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        open={open}
        autoHideDuration={5000}
        onClick={handleClose}
        TransitionComponent={Slide}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {errei}
        </Alert>
      </Snackbar>
    </div>
  )
}
