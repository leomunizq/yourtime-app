import {useState, useEffect} from 'react'
import firebase from '../services/firebase'

import 'firebase/compat/firestore'

export function useTodos(){
  const [todos, setTodos] = useState([])

  useEffect(() => {
    let unsubscribe = firebase
    .firestore()
    .collection('todos')
    .onSnapshot( snapshot => {
        const data = snapshot.docs.map(doc => { 
          return{
            id : doc.id,
            ...doc.data()
          }
        })
        setTodos(data)
    })
      return () => unsubscribe()
  }, [])

    return todos
}

export function useProjects(todos){
  const [projects, setProjects] = useState([])

  useEffect(() =>{
    let unsubscribe = firebase
    .firestore()
    .collection('projects')
    .onSnapshot( snapshot => {
      const data = snapshot.docs.map(doc =>{
        const project = doc.data().name

        return {
          id: doc.id,
          name: project
        }
      })
      setProjects(data)
    })
    return () => unsubscribe()


  }, [])
  return projects
}