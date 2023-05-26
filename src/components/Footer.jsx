import React from 'react'
import Logo from '../images/logo.png'
import { FaLinkedin, FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="container footer_container">
            <article>
                <Link to="/">
                   <img src={Logo} alt="Footer Logo" className='logo'/>
                </Link>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, aut asperiores obcaecati ipsa 
                    distinctio assumenda harum aperiam odit laboriosam ratione.
                </p>
                <div className="footer_socials">
                    <a href="https://linkdin.com" target='_blank' role='noreferrer noopener'><FaLinkedin/></a>
                    <a href="https://linkdin.com" target='_blank' role='noreferrer noopener'><FaFacebook/></a>
                    <a href="https://linkdin.com" target='_blank' role='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href="https://linkdin.com" target='_blank' role='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article><article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article><article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className="footer_copyright">
            <small>2023 Sandy &copy; All right Reserved</small>
        </div>
    </footer>
  )
}

export default Footer