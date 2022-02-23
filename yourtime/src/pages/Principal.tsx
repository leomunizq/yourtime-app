import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Todo } from '../components/Todo';
import Project from '../components/Project';
import AddButton from '../components/AddButton';
import LongMenu from '../components/Menu'



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
    background-color: #502AA3;
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
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 100%;
  min-height: 40px;
  background-color: #3C1F7B;
  border-radius: 4px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function Teste(todo:any) {
  
  const projects = [
    { id: 1, name: 'React'},
    { id: 2, name: 'Work'},
    { id: 3, name: 'Other'}
  ]
  
  
  const todos = [
    {
        id : 'd54sd4',
        text : 'Dinner with Anna',
        time : '10:00 AM',
        date : '16/02/2021',
        day : 'February 16th',
        checked : true,
        color : '#00ff00',
        project : 'React',
        Note : 'dont forget to give her a bouquet of flowers',
    },
    {
      id : 'd54ff4',
      text : 'Testando mt',
      time : '10:00 AM',
      date : '20/02/2021',
      day : 'February 20th',
      checked : false,
      color : '#00ff00',
      project : 'Other',
      Note : 'forget everything',
    }
]
 

  return (
    <div id="schedule-page">
      
      <div className="container">
        <header>
          <h1> .yourtime</h1>
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
      
{/* //conteudo 1// */}
<br/>

 {todos.map(todo => 
                   ( <Todo todo={todo} key={todo.id} />    )
                )}

      </TabPanel>
      <TabPanel value={1}>
{/* //Conteudo 2// */}
<br/>

{projects.map(project => (
                <Project
                  project={project}
                  key={project.id}
                
                />
              ))}

      </TabPanel>
      
    </TabsUnstyled>
        </div>
        <AddButton />
    </div>
   

  )
}
