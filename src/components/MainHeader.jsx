import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'


const MainHeader = () => {
  return (
    <>
        <header className='main_container'>
            <div className="container main_header_container">
              <div className="main_header-left">
                <h4>#100DaysOfWorkOut</h4>
               <h1>join The Legends of The Fitness World</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aut provident odit 
                  magni inventore harum quae? Dolorum libero eius maxime.
                </p>
                <Link to='/plans' className='btn lg'>Get Started</Link>
              </div>
              <div className="main_header-right">
                <div className="main_header-circle"></div>
                  <div className="main_header-image">
                    <img src={Image} alt="Main headerimage" />
                  </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default MainHeader