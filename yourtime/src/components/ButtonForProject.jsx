import React, { useState } from "react";
import '../styles/newschedule.scss'


export function ButtonFoProject(){

  

  const [appState, changeState] = useState({
activeObject: null,
projects: [
  { id: 1, name: 'React'},
  { id: 2, name: 'Work'},
  { id: 3, name: 'Other'}]
  })

function toggleActive(index){
  changeState({...appState, activeObject: appState.projects[index]})
}
function toggleActiveStyles(index){
  if (appState.projects[index] === appState.activeObject){
    return "project active";
  } else {
    return "project";
  }
}

  return (
   <>
   {
      appState.projects.length > 0 ?
      appState.projects.map( (project, index) => 
          <div
          className={toggleActiveStyles(index)}
              onClick={() => {toggleActive(index);}} 
              key={index}
          >
              {project.name}
          </div>    
      )
      :
      <div style={{color:'#ff0000'}}>
          Please add a project before proceeding
      </div>
  }
</>
  
    
  )
}

export default ButtonFoProject;