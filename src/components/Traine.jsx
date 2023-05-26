import React from 'react'
import Card from '../UI/Card'

const Traine = ({image, name, job, socials}) => {
  return (
    <div>
        <Card className="trainer">
           <div className="trainer_img">
            <img src={image} alt={name} />
           </div>
           <h3>{name}</h3>
           <p>{job}</p>
           <div className="trainer_socials">
            {
                socials.map( ({icon, link}, index) => {
                    return (
                        <a key={index} href={link} target='__blank'>{icon}</a>
                    )
                })
            }
           </div>
        </Card>
    </div>
  )
}

export default Traine