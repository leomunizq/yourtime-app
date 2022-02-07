import { useNavigate } from 'react-router';
import illustrationHome from '../assets/images/Saly-39.svg'
import Button from '../components/Button'

import '../styles/home.scss';



export function Home(){
  const navigate = useNavigate();
  async function handleLogin(){
    
     navigate('/login');
  
   }
  return (
    <div id="home-page">
    <main>
    <div className="container">
    <h1>.yourtime</h1>
    
<img src={illustrationHome} alt="Illustration Robot" className="hvr-bob" />

<p>Make yourself<br/>take on time</p>
<div >
<Button onClick={handleLogin}>ENTER</Button>

</div>
</div>
</main>
</div>
  )
}