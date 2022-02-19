import {Todo} from '../components/Todo';
import Project from '../components/Project'
import '../styles/schedule.scss';
// import menu from '../assets/images/menu.svg'
import AddButton from '../components/AddButton';



export function Schedule(todo:any) {
  return (
    <div id="schedule-page">
      <header></header>
      <div className="container">
        <header>
          <h1> .yourtime</h1>

          <div className="doisbuttons">
            <button className="active">Schedule</button>
            <button>Projects</button>
          </div>
        </header>
        <main>
          <h2>Schedule</h2>
         
           
                   <Todo todo={todo} key={todo.id} />    
             
         
         
        </main>
        <AddButton></AddButton>
      </div>
    </div>
  )
}