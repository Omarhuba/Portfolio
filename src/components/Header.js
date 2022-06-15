import React from 'react'
import '../stylesheet/Header.scss'
import name from '../assets/name.png'

export const Header = () => {
  return (
      <div className='header' id='header'>
        <div className='info'>
          <img src={name} alt="omar" data-aos="fade-up" data-aos-duration="2000" />
          <h1 data-aos="fade-up" data-aos-duration="2000">JAVASCRIPT DEVELOPER</h1>
          <a href='#project_page' data-aos="fade-up" data-aos-duration="2000">SEE MY PORTFOLIO</a>
        </div>
      </div>
  )
}

