import Todo from '../components/Todo';
import '../styles/schedule.scss';
import menu from '../assets/images/menu.svg'

export function Schedule(){
  return(
    <div id="schedule-page">
      <header></header>
<div className="container">
  <header>
  <h1> .yourtime</h1>

  <div className="doisbuttons">
<button>Schedule</button>
<button>Projects</button>
  </div>
  </header>
  <main>
    <h2>Schedule</h2>
    <Todo></Todo>
  </main>
  </div>
  </div>
  )
}