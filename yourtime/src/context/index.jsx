import React, { createContext, useState } from 'react'
import { useTodos, useProjects } from '../hooks'
import { auth } from '../services/firebase'
import { useAuth } from '../context/AuthContext'
export const TodoContext = React.createContext()

export function TodoContextProvider({ children }) {
  const { currentUser } = useAuth()

  const todos = useTodos()
  const projects = useProjects()

  return (
    <TodoContext.Provider
      value={{
        todos,
        projects
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default { TodoContextProvider }
