import React from 'react'
import './contact.css'
import Header from '../../components/Header'
import HeaderImage from "../../images/header_bg_2.jpg";
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

const Contact = () => { 
  return (
    <div>
       <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis doloribus libero. Deleniti 
        repellat obcaecati totam iusto ipsum? Vel, est.
       </Header>
       <section className='contect'>
         <div className="container contact_container">
          <div className="contact_wrapper">
            <a href="mailto:mahawarsandeep44@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
            <a href="http://facebook.com" target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
            <a href="http://wa.me/+918764038966" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div>
         </div>
       </section>
    </div>
  )
}

export default Contact