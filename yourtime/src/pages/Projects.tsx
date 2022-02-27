import React, { useContext, useState } from 'react'

import '../styles/schedule.scss'
import '../styles/todo.scss'

import AddButton from '../components/AddButton';

import Project from '../components/Project'

import { TodoContext } from '../context/index'

export function Projects() {
 


  //Context
  const {projects} = useContext(TodoContext)


  // const projects = [
  //   { id: 1, name: 'React'},
  //   { id: 2, name: 'Work'},
  //   { id: 3, name: 'Other'}
  // ]
  
 

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
             
              {projects.map((project: { id: any; }) => (
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
