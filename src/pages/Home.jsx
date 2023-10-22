import React from 'react'

import '../pages/home.css'
import Welcome_section from '../assets/components/Welcome_section'
import NavBar from '../assets/components/NavBar'
import Location_section from '../assets/components/Location_section'
import Separator from '../assets/components/Separator'
import Program_section from '../assets/components/Program_section'
import Gift_list_section from '../assets/components/gift_list_section'

const Home = () => {
  return (
    <div className='home_background'>
      <NavBar/>
      <Welcome_section/>
      <Separator/>
      <Location_section/>
      <Separator/>
      <Program_section/>
      <Separator/>
      <Gift_list_section/>
      <Separator/>
    </div>
  )
}

export default Home