import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import './navbar.css'
import Logo from '../images/logo.png'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'
import {ImCross} from 'react-icons/im'

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(true);

  return (
    <div>
        <nav>
            <div className="container nav_container">
                  <Link to='/' className='logo' onClick={() => setIsNavShowing(false)}>
                        <img src={Logo} alt="Nav Logo" /> 
                  </Link>
                  <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'} `}>
                    {
                        links.map( ({name, path},index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}
                                    onClick={() => setIsNavShowing(prev => !prev)}>
                                    {name}</NavLink>
                                </li>
                            )
                        })
                    }
                  </ul>
                  <button className='nav_toggle-btn' onClick={() => setIsNavShowing (prev => !prev)}>
                        {
                          isNavShowing ? <ImCross/> :<GoThreeBars/>
                        }
                  </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar