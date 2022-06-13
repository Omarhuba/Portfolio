import React from 'react'
import '../StyleSheet/Header.scss'
import name from '../assets/name.png'

export const Header = () => {
  return (
      <div className='header' id='header'>
        <div className='info'>
          <img src={name} alt="omar" />
          <h1>JAVASCRIPT DEVELOPER</h1>
          <button>SEE MY PORTFOLIO</button>
        </div>
      </div>
  )
}

