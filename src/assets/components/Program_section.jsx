import React from 'react'
import './program_section.css'

const Program_section = () => {
  return (
    <div className='program_section_background'>
      <h2 className='section_title'>Programme</h2>
      <div className="timeline_background">
        <div className="timeline_left">
        <div className='event_background left start'> 
            <div className="text">
              <p className="timeAndDate_text">Vendredi 10 mai <br/>16h00 :</p>
              <p className="event_text">Cérémonie Laïque au chateaux de Bône</p>
            </div>
            <div className="ring"></div>
          </div>
          <div className="shadow_box"></div>
          <div className='event_background left'> 
            <div className="text">
              <p className="timeAndDate_text">Vendredi 10 mai <br/>20h30 :</p>
              <p className="event_text">Dîner</p>
            </div>
            <div className="ring"></div>
          </div>
          <div className="shadow_box"></div>
          <div className='event_background left'> 
            <div className="text">
              <p className="timeAndDate_text">Samedi 11 Mai <br/>6h00</p>
              <p className="event_text">Coucher des vikings</p>
            </div>
            <div className="ring"></div>
          </div>
          <div className="shadow_box"></div>
          

        </div>
        <div className="timeline_right">
          <div className="shadow_box"></div>
          <div className='event_background right'>
            <div className="ring"></div>
            <div className="text">
              <p className="timeAndDate_text">Vendredi 10 mai <br/>18h30 :</p>
              <p className="event_text">Coktail dans le parc du chateau</p>
            </div>
          </div>
          <div className="shadow_box"></div>
          <div className='event_background right'>
            <div className="ring"></div>
            <div className="text">
              <p className="timeAndDate_text">Vendredi 10 mai <br/>23h30 :</p>
              <p className="event_text">Ouverture du bal par nos deux amoureux</p>
            </div>
          </div>
          <div className="shadow_box"></div>
          <div className='event_background right end'>
            <div className="ring"></div>
            <div className="text">
              <p className="timeAndDate_text">Samedi 11 Mai <br/>10h30 :</p>
              <p className="event_text">Brunch au chateaux</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Program_section