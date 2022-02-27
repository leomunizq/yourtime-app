import React, { createContext, useState } from 'react'
import { useTodos, useProjects } from '../hooks'



export const TodoContext = React.createContext()

export function TodoContextProvider({children}){
 

  const todos = useTodos()
  const projects = useProjects()

  return (
      <TodoContext.Provider
          value={
              {
                  todos,
                  projects
              }
          }
      >
          {children}
      </TodoContext.Provider>
  )
}

export default {TodoContextProvider}