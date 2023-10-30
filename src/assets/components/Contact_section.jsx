import React from 'react'
import '../components/contact_section.css'
import contactPicture from '../img/mariage_califourchon.png'

const ContactSection = () => {
  return (
    <div className='contact_background'>
        <h2 className='section_title' id='contact'>Contact</h2>
        <div className="contact_content_background">
          <div className="overlay_contact"> </div>
            <img className='contact_picture' src={contactPicture} alt="" />
            <div className="contact_text_background">
              <div className="person_profil">
                 <p className="name">Hortense Séval <br />(bientôt Egnell-Séval)</p>
                <p className="info_contact">💌 hortense.seval@gmail.com</p>
              </div>
              <div className="person_profil">
              <p className="name">Théo Egnell <br />(bientôt Egnell-Séval)</p>
                <p className="info_contact">💌 theo.egnell@gmail.com</p>
              </div>
               
            </div>
        
        </div>
        <p className='signature'>Site web fait avec 🩷 par Rodrigo Tortillias</p>
    </div>
  )
}

export default ContactSection