import React from 'react'
import '../components/location_section.css'
import castlePicture from '../img/chateau_bone.png'

const Location_section = () => {
  return (
    <div className='location_background'>
        <h2 className="section_title" id='location'>Le lieu</h2>
        <div className="presentation_location_background">
            <img className= 'castle_picture' src={castlePicture} alt="" />
            <div className="text_presentation_background">
                <p>Nous aurons le plaisir de vous accueillir au château Bone, un ancienne propriété viticole du blayais au bord de l’estuaire de la Gironde.
                    Pour les curieux vous pouvez poursuivre <a className='go_to_castle_website' href='https://chateaubone.wixsite.com/monsite' target='_blank'>ici !</a></p>
                <p>Adresse :
                    2 rue des pigeonniers, 33710 Gauriac <br/>
                    A 40 minutes de Bordeaux en voiture.
                </p>
                <a className='go_to_google_maps' href="https://maps.app.goo.gl/Ann8qPJ6CnKWHGfG8" target='_blank'>
                    <p> 🧭 Voir sur maps</p>
                </a>
                
            </div>
        </div>
    </div>
  )
}

export default Location_section