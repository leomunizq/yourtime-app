import React, { useState } from 'react'
// import Todo from '../components/Todo';
import '../styles/schedule.scss'
import '../styles/todo.scss'

import AddButton from '../components/AddButton';

import Project from '../components/Project'
import Todo from '../components/Todo';

export function Projects() {
  // const [showMenu, setShowMenu] = useState(true)
  // const [edit, setEdit] = useState(false)

  const projects = [
    { id: 1, name: 'React'},
    { id: 2, name: 'Work'},
    { id: 3, name: 'Other'}
  ]
  
 

  return (
    <div id="schedule-page">
      
      <div className="container">
        <header>
          <h1> .yourtime</h1>

          <div className="doisbuttons">
            <button>Schedule</button>
            <button className="active">Projects</button>
          </div>
        </header>
        <main>
          <div id="projects">
             
              {projects.map(project => (
                <Project
                  project={project}
                  key={project.id}
                
                />
              ))}
          </div>
         
        </main>
        <AddButton />
      </div>
    </div>
  )
}
