import React, { useState } from 'react'

import '../styles/todo.scss'

import EditIcon from '@mui/icons-material/Edit'
import Arrow from '@mui/icons-material/KeyboardArrowDownOutlined'
import Todo from './Todo'
import Modal from './Modal'
import RenameProject from './RenameProject'
// import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

export function Project({ project }: any) {
  const [showModal, setShowModal] = useState(false)
  
  return (
    
    <div id="projects">
      <div className="box-project">
        <h2> {project.name}</h2>
     
        <div className="icons">
          
          <EditIcon   onClick={ () => setShowModal(true)} />
          <Arrow />
        </div>
      </div>
      <Todo />
      <Modal showModal={showModal} setShowModal={setShowModal}>
                <RenameProject project={project} setShowModal={setShowModal}/>
            </Modal>
    </div>
    
    
  )
}

export default Project
