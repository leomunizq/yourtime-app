import "../styles/addbutton.scss";



export function AddButton(){

  return (
    <div className="fab">
  <button className="main">
  </button>
  <ul>
    <li>
      <label htmlFor="opcao1">Opção 1</label>
      <button id="opcao1">
      ⎈
      </button>
    </li>
    <li>
      <label htmlFor="opcao2">Opção 2</label>
      <button id="opcao2">
      ⎗
      </button>
    </li>
    <li>
      <label htmlFor="opcao3">Opção 3</label>
      <button id="opcao3">
      ☏
      </button>
    </li>
  </ul>
</div>
  )
}

export default AddButton;