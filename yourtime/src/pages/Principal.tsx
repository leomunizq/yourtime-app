import * as React from 'react'

import { TodoContext } from '../context'

import { styled } from '@mui/system'
import TabsUnstyled from '@mui/base/TabsUnstyled'
import TabsListUnstyled from '@mui/base/TabsListUnstyled'
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled'
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled'
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled'
import { Todo } from '../components/Todo'
import Project from '../components/Project'
import AddButton from '../components/AddButton'
import LongMenu from '../components/Menu'
import { useContext } from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import { auth } from '../services/firebase'
import illustrationEmpty from '../assets/images/Saly-38.svg'
import '../hooks/index'

// ENVIAR TODO ESSE STYLE PARA CSS
const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  height: 32px;
  padding: 12px 16px;
  margin: 4px !important;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #502aa3;
  }

  &:focus {
    color: #fff;
    border-radius: 4px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #272430;
    color: #fff;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`

const TabsList = styled(TabsListUnstyled)`
  min-width: 100%;
  min-height: 40px;
  background-color: #3c1f7b;
  border-radius: 4px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`

export default function Principal(todo: any) {
  const { todos, projects } = useContext(TodoContext)
  const { currentUser } = useAuth()

  console.log(auth.currentUser?.uid)

  //privated page
  if (auth.currentUser?.uid === undefined || null) {
    return <Navigate to="/login" />
  }

  return (
    <div id="schedule-page">
      <div className="container">
        <header>
          <h1>
            .yourtime
            {/* {currentUser && <pre> {JSON.stringify(currentUser, null, 2)}</pre>} */}
          </h1>
          <div className="menu">
            <LongMenu />
          </div>
        </header>

        <TabsUnstyled defaultValue={0}>
          <TabsList>
            <Tab>Schedules</Tab>
            <Tab>Projects</Tab>
          </TabsList>
          <TabPanel value={0}>
            {/* //conteudo 1 da tab SCHEDULE // */}
            <br />

            {todos.map((todo: { id: any }) => (
              <Todo todo={todo} key={todo.id} />
            ))}
          </TabPanel>
          <TabPanel value={1}>
            {/* //Conteudo 2 da tab PROJECTS // */}
            <br />

            {projects.map((project: { id: any }) => (
              <Project project={project} key={project.id} />
            ))}
          </TabPanel>
        </TabsUnstyled>
      </div>
      <AddButton />
    </div>
  )
}
