import React from 'react'
import Header from '../../components/Header'
import HeaderImage from "../../images/header_bg_5.jpg";
import { trainers } from '../../data';
import { BsInstagram } from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaFacebook, FaLinkedin} from 'react-icons/fa'
import './trainer.css'
import Traine from '../../components/Traine';

const Trainers = () => {
  return (
    <div>
    <>
      <Header title='Our Trainer' image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsum doloremque nulla deserunt
       voluptate dignissimos quia repellat placeat eos commodi.
    </Header>
    <div className="trainers">
       <div className="container trainer_container">
        {
          trainers.map( ({id, image, name, job, socials}) => {
            return(
              <Traine key={id} image={image} name={name} job={job} socials={
                [
                   {icon: <BsInstagram/>, link: socials[0]},
                   {icon: <AiOutlineTwitter/>, link: socials[1]},
                   {icon: <FaFacebook/>, link: socials[2]},
                   {icon: <FaLinkedin/>, link: socials[3]}
              ]
              }/>
            )
          })
        }
       </div>
    </div>
    </>

    </div>
  )
}

export default Trainers