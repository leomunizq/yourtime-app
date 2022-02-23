import React, { useState } from 'react'
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

import '../styles/newschedule.scss'

import arrowBack from '../assets/images/arrow.svg'
import checkOk from '../assets/images/check-ok.svg'
import create from '../assets/images/create.svg'
import { Bell } from 'react-bootstrap-icons'



export function NewSchedule() {
  const [text, setText] = useState('')
  const [day, setDay] = useState<Date | null>(new Date())
  const [time, setTime] = useState<Date | null>(new Date())

  const [note, setNote] = useState('')
  const [place, setPlace] = useState('')


  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  

  const projects = [
    { id: 1, name: 'React'},
    { id: 2, name: 'Work'},
    { id: 3, name: 'Other'}
  ]
  
  const printButtonLabel = (event:any) => {
    console.log(event.target.name);
  }
  return (
    <div id="newschedule-page">
      <header></header>
      <div className="container">
        <header>
          <div className="arrow">
            <img
              src={arrowBack}
              onClick={() => window.history.back()}
              alt="Back to last page"
            />
          </div>
          <div className="check">
            <img src={checkOk} alt="To-Do ok" />
            <img src={create} alt="Create To-Do" />
          </div>
        </header>
        <h3>Your To-Do</h3>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <form>
            <div className="title-todo">
              <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Create a new To-Do"
                autoFocus
              />
            </div>
            <div className="pick-day">
              <div className="title">
                <p>Day</p>
              </div>
              <DatePicker value={day} onChange={day => setDay(day)} />
            </div>
            <div className="pick-time">
              <div className="title">
                <p>Time</p>
              </div>
              <TimePicker value={time} onChange={time => setTime(time)} />
            </div>
            <div className="remind">
              <p>Remind Me!</p>
              <i className="bi bi-toggle-on"></i>
              <Bell />
              


            </div>
            <div className="notes-todo">
              <input
                type="text"
                value={note}
                onChange={e => setNote(e.target.value)}
                placeholder="Notes"
              />
            </div>
            <div className="place-todo">
              <input
                type="text"
                value={place}
                onChange={e => setPlace(e.target.value)}
                placeholder="Localization"
              />
            </div>
            <div className="pick-project">
              <div className="title">
                <p>Choose a project</p>
              </div>
              <div className="projects">
             
              {
                            projects.length > 0 ?
                            projects.map( (project: { id: number; name: string }, i:any) => 
                                <div
                                className={`project ${isActive ? "active" : ""}`}
                                    onClick={() => toggleClass()} 
                                    key={project.id}
                                >
                                    {project.name}
                                </div>    
                            )
                            :
                            <div style={{color:'#ff0000'}}>
                                Please add a project before proceeding
                            </div>
                        }

              </div>
            </div>
          </form>
        </MuiPickersUtilsProvider>
      </div>
    </div>
  )
}
