import React, { useState } from 'react'
import { useContext } from 'react';
import { TodoContext } from '../context'
import firebase from '../services/firebase'
import 'firebase/compat/firestore'
import '../styles/todo.scss'

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import Arrow from '@mui/icons-material/KeyboardArrowDownOutlined'
import {Todo} from './Todo'
import Modal from './Modal'
import RenameProject from './RenameProject'
// import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';


export function Project({ project, todo }: any) {
  const { todos, projects } = useContext(TodoContext)

  const [showModal, setShowModal] = useState(false)

  const deleteProject = (project: { id: any; name: any; }) => {
    firebase 
      .firestore()
      .collection('projects')
      .doc(project.id)
      .delete()
      .then(() => {
        firebase
        .firestore()
        .collection('todos')
        .where('project', '==', project.name)
        .get()
        .then( (querySnapshot) =>{
          querySnapshot.forEach(doc =>{
            doc.ref.delete()
          })
        })
      })
      
     

  }


  return (
    
    <div id="projects">
      <div className="box-project">
        <h2> {project.name}</h2>
     
        <div className="icons">
          
        <DeleteIcon color="action" onClick={ () => deleteProject(project)}/>
          <EditIcon   onClick={ () => setShowModal(true)} />
          <Arrow />
        </div>
      </div>
      
           {todos.map((todo: { project: any; id: any; }) => 
           project.name == todo.project ?
                   ( <Todo todo={todo} key={todo.id} />    ) : ''
                )}
        
      <Modal showModal={showModal} setShowModal={setShowModal}>
                <RenameProject project={project} setShowModal={setShowModal}/>
            </Modal>
    </div>
    

    
    
  )
}

export default Project
