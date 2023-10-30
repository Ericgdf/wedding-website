import React from 'react'
import arbreImg from '../img/mariage_arbre.jpg'
import '../components/welcome_section.css'

const Welcome_section = () => {
  return (
    <div className='welcome_background'> 
        <div className='img_container'>
            <div className="overlay">
            <p className='welcome_text'>Hortense & Théo </p>
            </div>
            <img className='home_img' src={arbreImg} alt="Théo et Hortense tienne un arbre" id='RSVP'/>
        </div>
        <p className="wedding_date">Vous invitent à leur mariage le</p>
        <p className="wedding_date_number"> 10 et 11 Mai 2024</p>
        <a href="https://forms.gle/weB1wzceaKwbr8t98" target="_blank">
             <button >RSVP avant le 3 Janvier</button>
        </a>
        <p className="text_welcome_section">Nous sommes ravis de partager ce moment spécial avec vous. Ici, vous trouverez toutes les informations dont vous avez besoin pour vous joindre à notre célébration. Nous sommes impatients de créer des souvenirs inoubliables ensemble. Merci pour votre amour et votre soutien.</p>
    </div>
  )
}

export default Welcome_section