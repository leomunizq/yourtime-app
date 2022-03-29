import { useState } from 'react'
import { useToast } from '@chakra-ui/toast'
import { useAuth } from '../context/AuthContext'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom'

import '../styles/login.scss'

import appleImg from '../assets/images/apple.svg'
import facebookImg from '../assets/images/facebook.svg'
import googleImg from '../assets/images/google.svg'

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  async function handlenRegister() {
    navigate('/register')
  }

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
                  toast({
                    description: 'Credentials not valid.',
                    status: 'error',
                    duration: 9000,
                    isClosable: true
                  })
                  return
                }

                login(email, password)
                  .then(res => {
                    navigate('/principal')
                    console.log(currentUser)
                  })
                  .catch(error => {
                    console.log(error.message)

                    toast({
                      description: error.message,
                      status: 'error',
                      duration: 9000,
                      isClosable: true
                    })
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
    </div>
  )
}
