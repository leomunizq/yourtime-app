import { useState } from 'react'
import { useToast } from '@chakra-ui/toast'
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()
  const navigate = useNavigate()

  const { register } = useAuth()

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
              toast({
                description: 'Credentials not valid.',
                status: 'error',
                duration: 9000,
                isClosable: true
              })
              return
            }

            register(email, password)
              .then(res => {
                navigate('/principal')
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

          <p>By clicking the Register button, you agree to the public offer</p>

          <Button type="submit">Register</Button>
        </form>
        <div className="loginwith">
          <p id="login">sign in with</p>
          <img src={appleImg} className="grow" alt="" />
          <img src={facebookImg} className="grow" alt="" />
          <img src={googleImg} className="grow" alt="" />
        </div>
      </div>
    </div>
  )
}
