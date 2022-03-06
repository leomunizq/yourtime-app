import React, {useState} from 'react';

import firebase from '../services/firebase'
import 'firebase/compat/firestore'

import "../styles/todo.scss";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';






export function Todo({todo}: any){
 
  
  const [hover, setHover] = useState(false)

  const deleteTodo = (todo: { id: any; }) => {
    firebase
        .firestore()
        .collection('todos')
        .doc(todo.id)
        .delete()
}

const checkTodo = (todo: any) => {
  firebase
  .firestore()
  .collection('todos')
  .doc(todo.id)
  .update({
    checked : !todo.checked
  })

}

  return (
    <div className="box-todo" style={{opacity : todo.checked ? '0.5' : ''}}>
      <div className="header">
      <h3 style={{color : todo.checked ? '#bdbdbd' : '#fff'}}>{todo.text}</h3>
      <div className="delete">
      
      <DeleteIcon color="action"  onClick={ () => deleteTodo(todo)}/>

      
                
                    {
                        todo.checked ?
                        <span className="checked">
                            <CheckBoxOutlinedIcon color="action"  onClick={ () => checkTodo(todo)} />
                        </span>
                        :
                        <span className="unchecked">
                            <CheckBoxOutlineBlankIcon color="action"  onClick={ () => checkTodo(todo)}/>
                        </span>}
                      
                        
                       
                        </div>
      </div>
      <div className="line" ></div>
      <ul >
        <li style={{color : todo.checked ? '#bdbdbd' : '#fff'}}>Time <a> {todo.time}</a></li>
        <li style={{color : todo.checked ? '#bdbdbd' : '#fff'}}>Day  <a>{todo.day}</a></li>
        <li style={{color : todo.checked ? '#bdbdbd' : '#fff'}}>Notes <a>{todo.note}</a></li>
      </ul>
    </div>
    
  )
  
}