import React, { useState } from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context'
import { useNavigate } from 'react-router-dom'

import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

import firebase from '../services/firebase'
import 'firebase/compat/firestore'
import moment from 'moment'

import '../styles/newschedule.scss'

import arrowBack from '../assets/images/arrow.svg'
import create from '../assets/images/create.svg'
import { Bell } from 'react-bootstrap-icons'

export function NewSchedule() {
  const navigate = useNavigate()

  const [text, setText] = useState('')
  const [day, setDay] = useState<Date | null>(new Date())
  const [time, setTime] = useState<Date | null>(new Date())

  const [note, setNote] = useState('')
  const [place, setPlace] = useState('')

  const { projects } = useContext(TodoContext)

  const [appState, changeState] = useState({
    activeObject: Object,
    projects
  })

  function toggleActive(index: string | number) {
    changeState({ ...appState, activeObject: appState.projects[index] })
  }
  function toggleActiveStyles(index: string | number) {
    if (appState.projects[index] === appState.activeObject) {
      return 'project active'
    } else {
      return 'project'
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault()
    if (text) {
      firebase
        .firestore()
        .collection('todos')
        .add({
          checked: false,
          date: moment(day).format('MM/DD/YYYY'),
          day: moment(day).format('MMM Do YY'),
          note: note,
          project: appState.activeObject.name,
          text: text,
          time: moment(time).format('HH:mm A'),
          place: place
        })

      navigate('/principal')
    }
  }

  return (
    <div id="newschedule-page">
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
            <img src={create} alt="Create To-Do" onClick={handleSubmit} />
          </div>
        </header>
        <h3>Your To-Do</h3>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <form onSubmit={handleSubmit}>
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
                {appState.projects.length > 0 ? (
                  appState.projects.map((project: any, index: any) => (
                    <div
                      className={toggleActiveStyles(index)}
                      onClick={() => {
                        toggleActive(index)
                      }}
                      key={index}
                    >
                      {project.name}
                    </div>
                  ))
                ) : (
                  <div style={{ color: '#ff0000' }}>
                    Please add a project before proceeding
                  </div>
                )}
              </div>
            </div>
          </form>
        </MuiPickersUtilsProvider>
      </div>
    </div>
  )
}
