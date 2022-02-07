import React from 'react'
import '../styles/newschedule.scss'

import arrowBack from '../assets/images/arrow.svg'
import checkOk from '../assets/images/check-ok.svg'
import create from '../assets/images/create.svg'

export function NewSchedule() {
  return (
    <div id="newschedule-page">
      <header></header>
      <div className="container">
        <header>
          <div className="arrow">
            <img src={arrowBack} alt="Back to last page" />
          </div>
          <div className="check">
            <img src={checkOk} alt="To-Do ok" />
            <img src={create} alt="Create To-Do" />
          </div>
        </header>
        <h3>Your To-Do</h3>
        
      </div>
    </div>
  )
}
