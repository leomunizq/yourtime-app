import illustrationHome from '../assets/images/Saly-39.svg'
import Button from '../components/Button'


export function Home(){
  return (
    <main>
    <div className="container">
    <h1>.youtime</h1>
    
<img src={illustrationHome} alt="Illustration Robot" className="hvr-bob" />

<p>Make yourself <br/> more on time</p>
<div >
<Button type="submit">ENTER</Button>

</div>
</div>
</main>
  )
}