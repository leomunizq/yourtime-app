import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import AuthContextProvider from './context/AuthContext'

import { Home } from './pages/Home'
import Login from './pages/Login'
import { NewSchedule } from './pages/NewSchedule'
import { Projects } from './pages/Projects'
import { Register } from './pages/Register'
import { Schedule } from './pages/Schedule'
import Principal from './pages/Principal'
import { TodoContextProvider } from './context/index'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <TodoContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/principal" element={<Principal />} />
              <Route path="/newschedule" element={<NewSchedule />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </TodoContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  )
}
