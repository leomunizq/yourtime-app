import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import AddIcon from '@mui/icons-material/Add';

import "../styles/addbutton.scss";



export function AddButton(){

  return (
    <div className="fab">
  <button className="main">
  <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
  </button>
  <ul>
    <li>
      <label htmlFor="opcao1">New To-DO</label>
      <button id="opcao1">
      ⎈
      </button>
    </li>
    <li>
      <label htmlFor="opcao2">New Project</label>
      <button id="opcao2">
      ⎗
      </button>
    </li>
   
  </ul>
</div>
  )
}

export default AddButton;