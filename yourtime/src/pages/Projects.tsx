import React, { useState } from 'react'
// import Todo from '../components/Todo';
import '../styles/schedule.scss'
import '../styles/todo.scss'

import { AddButton } from '../components/AddButton'

import Project from '../components/Project'

export function Projects() {
  const [showMenu, setShowMenu] = useState(true)
  const [edit, setEdit] = useState(false)

  const projects = [
    { id: 1, name: 'React', numOfTodos: 0 },
    { id: 2, name: 'Work', numOfTodos: 1 },
    { id: 3, name: 'Other', numOfTodos: 2 }
  ]

  return (
    <div id="schedule-page">
      <header></header>
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
            <h2>
              {' '}
              {projects.map(project => (
                <Project
                  project={project}
                  key={project.id}
                
                />
              ))}
            </h2>
           
          </div>
        </main>
        <AddButton />
      </div>
    </div>
  )
}
