import React from 'react'
import { useNavigate } from 'react-router';
import "../styles/addbutton.scss";
import AddNewProject from "./AddNewProject";
import {NewSchedule} from "../pages/NewSchedule";



export function AddButton(){
  const navigate = useNavigate();
  async function handleNewSchedule(){
    
     navigate('/newschedule');
  
   }
   

  return (
    <div className="fab">
  <button className="main">
  </button>
  <ul>
    <li>
      <label htmlFor="opcao1">New To-DO</label>
      <button onClick={handleNewSchedule} id="opcao1">
      ⎈
      </button>
    </li>
    <li>
      <label htmlFor="opcao2">New Project</label>
      <button  id="opcao2">
      ⎗
      </button>
    </li>
   
  </ul>
</div>
  )
}

export default AddButton;