import React from 'react'
import './home.css'
import MainHeader from '../../components/MainHeader'
import Program from '../../components/Program'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import Teastimonial from '../../components/Teastimonial'
// import Footer from '../../components/Footer'


const Home = () => {
  return (
    <div>
      <MainHeader/>
      <Program/>
      <Values/>
      <FAQs/>
      <Teastimonial/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home;