import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../services/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
  uid
} from 'firebase/auth'

const AuthContext = createContext({
  currentUser: null,
  register: () => Promise,
  login: () => Promise,
  logout: () => Promise,
  signInWithGoogle: () => Promise,
  signInWithFacebook: () => Promise
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user ? user : null)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }
  function signInWithFacebook() {
    const provider = new FacebookAuthProvider()
    return signInWithPopup(auth, provider)
  }

  function logout() {
    return signOut(auth)
  }

  const value = {
    currentUser,
    register,
    login,
    signInWithGoogle,
    logout,
    signInWithFacebook
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
