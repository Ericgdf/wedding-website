import React from 'react'
import './gift_list_section.css'

const Gift_list_section = () => {
  return (
    <div className='gift_background'>
        <h2 className='section_title'>Liste des cadeaux </h2>
        <p className='gift_explanation'>Nous sommes extrêmement reconnaissants de célébrer notre amour avec vous lors de notre mariage. Votre présence est le plus beau cadeau que nous puissions recevoir. Pour ceux d'entre vous qui souhaitent nous honorer avec un geste supplémentaire, nous avons créé cette liste de cadeaux. Elle regroupe des idées qui contribueront à notre futur ensemble et à la création de notre nouveau foyer. Vos dons sont une bénédiction et nous les accueillons avec tout notre cœur. Merci de faire partie de cette étape incroyable de notre vie.</p>
        <button>Cliquez-ici pour voir notre Liste 🎁</button>
    </div>
  )
}

export default Gift_list_section