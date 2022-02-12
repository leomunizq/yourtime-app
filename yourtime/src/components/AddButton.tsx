import React from 'react'

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import '../styles/addbutton.scss'

import AddNewProject from './AddNewProject';


export default function AddButton(this: any){
   
  
  return (
    <div className="fab">
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
    <Fab color="primary" aria-label="add" >
    <AddNewProject /> 
      </Fab>
      </Box>
      </div>
      
  )
}


