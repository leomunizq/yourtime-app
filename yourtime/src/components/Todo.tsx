import React from "react";

import "../styles/todo.scss";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';




export function todo(){
  return (
    <div className="box-todo">
      <div className="header">
      <h3>Dinner with Anna</h3>
      <div className="delete">
      <DeleteIcon color="action"/>
      <CheckBoxOutlineBlankIcon color="action"/>
      </div>
      </div>
      <div className="line"></div>
      <ul>
        <li>Time <a> 08:00pm</a></li>
        <li>Day  <a>February 16th</a></li>
        <li>Notes <a>don't forget to give her a bouquet of flowers</a></li>
      </ul>
    </div>
  )
}

export default todo;