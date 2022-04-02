import React from 'react'
import { useState } from 'react'

import { Snackbar, Slide } from '@mui/material'

import MuiAlert, { AlertProps } from '@mui/material/Alert'

import { useNavigate } from 'react-router-dom'
import '../styles/register.scss'

import { Button } from '../components/Button'
import appleImg from '../assets/images/apple.svg'
import facebookImg from '../assets/images/facebook.svg'
import googleImg from '../assets/images/google.svg'
import { useAuth } from '../context/AuthContext'

export function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const {
    register,
    login,
    onAuthStateChanged,
    signInWithGoogle,
    signInWithFacebook
  } = useAuth()

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

  return (
    <div id="register-page">
      <div className="container">
        <h1> .yourtime</h1>
        <h2>
          Create an
          <br />
          account
        </h2>
        <form
          onSubmit={async e => {
            e.preventDefault()

            if (!email || !password) {
              setErrei('Credentials Not Valid')
              handleSnack()
              return
            }

            register(email, password)
              .then(res => {
                navigate('/principal')
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

          <p>By clicking the Register button, you agree to the public offer</p>

          <Button type="submit">Register</Button>
        </form>
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
