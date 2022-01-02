import React from 'react'
import './Navbar.css'

interface NavbarProps{
  setCategoria: Function
}

function Navbar(props: NavbarProps) {
  const {setCategoria} = props;

  return (
    <div className="row header">
      <h1 className="four columns">Foodish API</h1>
      <div className="five columns u-pull-right buttons-container">
        <button
          onClick={()=>setCategoria('pizza')}
        >
          Pizzas
        </button>
        <button
          onClick={()=>setCategoria('burger')}
        >
          Hamburgesas
        </button>
        <button
          onClick={()=>setCategoria('pasta')}
        >
          Pastas
        </button>
        <button
          onClick={()=>setCategoria('dessert')}
        >
          Postres
        </button>
      </div>
    </div>
  )
}

export default Navbar
