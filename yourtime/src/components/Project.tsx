import React, { useState } from 'react'

import '../styles/todo.scss'


import EditIcon from '@mui/icons-material/Edit'
import Arrow from '@mui/icons-material/KeyboardArrowDownOutlined'
import {Todo} from './Todo'
import Modal from './Modal'
import RenameProject from './RenameProject'
// import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';


export function Project({ project, todo }: any) {
  const todos = [
    {
        id : 'd54sd4',
        text : 'Dinner with Anna',
        time : '10:00 AM',
        date : '16/02/2021',
        day : 'February 16th',
        checked : true,
        color : '#00ff00',
        project : 'React',
        Note : 'dont forget to give her a bouquet of flowers',
    },
    {
      id : 'd54ff4',
      text : 'Testando mt',
      time : '10:00 AM',
      date : '20/02/2021',
      day : 'February 20th',
      checked : false,
      color : '#00ff00',
      project : 'Other',
      Note : 'forget everything',
    }
]
  const [showModal, setShowModal] = useState(false)
  // console.log(project)
  return (
    
    <div id="projects">
      <div className="box-project">
        <h2> {project.name}</h2>
     
        <div className="icons">
          
          <EditIcon   onClick={ () => setShowModal(true)} />
          <Arrow />
        </div>
      </div>
      
           {todos.map(todo => 
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
