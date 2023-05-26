import React from 'react'
import './plans.css'
import Header from '../../components/Header'
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from '../../UI/Card'
import { plans } from '../../data';

const Plans = () => {
  return (
    <div>
      <Header title="Membership plans" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id accusantium modi mollitia, 
        iure aspernatur exercitationem tempore odit incidunt pariatur. Eius vero fugiat corrupti inventore 
        reiciendis corporis odio perferendis incidunt velit!
      </Header>
      <section className='plans'>
          <div className="container plans-container">
            {
              plans.map( ({id, name, desc, price, features}) => {
                  return(
                    <Card key={id} className='plan'>
                        <h3>{name}</h3>
                        <small>{desc}</small>
                        <h1>{`$${price}`}</h1><h2>/mo</h2>
                        <h4>Features</h4>
                        {
                          features.map( ({feature, available}, index) =>{
                            return (
                                <p key={index} className={!available ? 'disabled' : ' '}>{feature}</p>
                            )
                          })
                        }
                        <button className='btn lg'>Choose Plan</button>
                    </Card>
                  )
              })
            }
          </div>
      </section>
    </div>
  )
}

export default Plans