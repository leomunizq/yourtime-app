import { useState, useEffect } from 'react'
import firebase from '../services/firebase'
import { auth } from '../services/firebase'
import { useAuth } from '../context/AuthContext'
import { Todo } from '../components/Todo'

import 'firebase/compat/firestore'

export function useTodos() {
  const { currentUser } = useAuth()
  const [todos, setTodos] = useState([])

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection(`todos ${auth.currentUser?.uid}`)
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setTodos(data)
      })
    return () => unsubscribe()
  }, [setTodos, todos])

  return todos
}

export function useProjects(todos) {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection(`projects ${auth.currentUser?.uid}`)
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => {
          const project = doc.data().name

          return {
            id: doc.id,
            name: project
          }
        })
        setProjects(data)
      })
    return () => unsubscribe()
  }, [setProjects, projects])
  return projects
}
