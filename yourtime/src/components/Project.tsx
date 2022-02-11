import React from 'react'

import '../styles/todo.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import { Projects } from '../pages/Projects'
import EditIcon from '@mui/icons-material/Edit'
import Arrow from '@mui/icons-material/KeyboardArrowDownOutlined'
import Todo from './Todo'
import AddNewProject from './AddNewProject'
// import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

export function Project({ project }: any) {
  return (
    
    <div id="projects">
      <div className="box-project">
        <h2> {project.name}</h2>
     
        <div className="icons">
          
          <EditIcon />
          <Arrow />
        </div>
      </div>
      <Todo />
    </div>
    
  )
}

export default Project
