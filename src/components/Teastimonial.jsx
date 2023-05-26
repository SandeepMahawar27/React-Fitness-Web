import React, { useState } from 'react'
import {ImQuotesLeft} from 'react-icons/im'
import Card from '../UI/Card'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import { testimonials } from '../data'
import SectionHead from './SectionHead'
    
const Teastimonial = () => {
    const [index, setIndex] = useState(0)
    const {name, quote, avatar, job} = testimonials[index];

    const prevTestimonialHandler = () => {
        setIndex(prev => prev - 1);
        if(index <= 0){
            setIndex(testimonials.length - 1);
        }
           
    }
    const nextTestimonialHandler = () => {
           setIndex(prev => prev + 1);
           if(index >= testimonials.length-1){
            setIndex(0);    
           }
    }

      return (
        <section className='testimonials'>
            <div className="container testimonial_container">
                <SectionHead icon={<ImQuotesLeft/>} title="Testimonials" className="testimonials_head"/>
                <Card className="testimonial">
                    <div className="testimonial_avtar">
                        <img src={avatar} alt={name} />
                    </div> 
                    <p className='testimonial_quote'>{`"${quote}"`}</p>
                    <h5>{name}</h5>
                    <small className='testimonial_title'>{job}</small>
                </Card>
                <div className="testimonial_btn-container">
                    <button className='testimonial_btn' onClick={prevTestimonialHandler}><IoIosArrowDropleftCircle/></button>
                    <button className='testimonial_btn' onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle/></button>
                </div>
            </div>
        </section>
      )
}
    
export default Teastimonial