import React from "react";

import "../styles/todo.scss";




export function todo(){
  return (
    <div className="box-todo">
      <h3>Dinner with Anna</h3>
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