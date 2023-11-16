import React from 'react'
import './header.css'

const Header = () => {
    function click(name)
    {
        console.log("name")
    }
  return (
    <div>
    <p className='para'> siet blog  </p>
        <button onClick={ () => click('ramya')}> click me </button>
    </div>
    
  )
}

export default Header