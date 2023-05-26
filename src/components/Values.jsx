import React from 'react'
import Images from '../images/values.jpg'
import {GiCutDiamond} from 'react-icons/gi'
import Card from '../UI/Card'
import SectionHead from './SectionHead'
import {values} from '../data'

const Values = () => {
  return (
    <section className='values'>
           <div className="container values_container">
            <div className="values-left">
                <div className="values-image">
                    <img src={Images} alt="ValueImage" />
                </div>
            </div>
            <div className="values-right">
                <SectionHead icon={<GiCutDiamond/>} title="values"/>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, consectetur sapiente voluptas
                    amet corporis repellendus?
                </p> 
                <div className="values_wrapper">
                    {
                        values.map( ({id, icon, title, desc}) => {
                            return (
                                <Card key={id} className="values_value">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                            )
                        })
                    }
                </div>
            </div>
           </div>
    </section>
  )
}

export default Values