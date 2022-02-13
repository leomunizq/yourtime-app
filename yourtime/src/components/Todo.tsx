import React, {useState} from 'react';

import "../styles/todo.scss";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

import {Todos} from "./Todos";





export function Todo({todo}: any){
 
  console.log(Todos)
  const [hover, setHover] = useState(false)

  return (
    <div className="box-todo" onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
      <div className="header">
      <h3 style={{color : todo.checked ? '#bebebe' : '#fff'}}>{todo.text}</h3>
      <div className="delete">
      
      <DeleteIcon color="action"/>

      
                
                    {
                        todo.checked ?
                        <span className="checked">
                            <CheckBoxOutlinedIcon color="disabled" />
                        </span>
                        :
                        <span className="unchecked">
                            <CheckBoxOutlineBlankIcon color="action"/>
                        </span>}
                      
                        
                       
                        </div>
      </div>
      <div className="line"></div>
      <ul>
        <li>Time <a> {todo.time}</a></li>
        <li>Day  <a>{todo.day}</a></li>
        <li>Notes <a>{todo.Note}</a></li>
      </ul>
    </div>
    
  )
  
}