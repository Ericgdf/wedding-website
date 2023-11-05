import React, { useState } from 'react'
import '../components/navBar.css'
import IconMenu from '../img/menu.png'

const NavBar = () => {

  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)

  function handleClickMenu() {
    setBurgerMenuOpen(!burgerMenuOpen)
  };
  
  return (
    <div className='nav_background'>
        {burgerMenuOpen ? (
            <div className="burgerMenuBackground">
              <h1 className='website_name_menu'>Hortense & Théo</h1>
              <nav className='list_background_column_mobil'>
                <ul>
                  <li onClick={handleClickMenu}><a href="#RSVP"> 💌 RSVP</a></li>
                  <li onClick={handleClickMenu}><a href="#location">🧭 Le Lieu</a></li>
                  <li onClick={handleClickMenu}><a href="#program">🎉 Programme</a></li>
                  <li onClick={handleClickMenu}><a href="#gift">🎁 Liste de mariage</a></li>
                  <li onClick={handleClickMenu}><a href="#contact">🤙 Contact</a></li>
                </ul>
               </nav>
            </div>
        ) : null}

       
       {!burgerMenuOpen ? <h1 className='website_name'>Hortense & Théo</h1> : null}
       <nav className='list_background computer'>
           <ul>
           <li><a href="#RSVP">RSVP</a></li>
           <li><a href="#location">Le Lieu</a></li>
           <li><a href="#program">Programme</a></li>
           <li><a href="#gift">Liste de mariage</a></li>
           <li><a href="#contact">Contact</a></li>
           </ul>
     </nav>
     
     <div className='mobil'onClick={handleClickMenu}>
     {burgerMenuOpen ? null : <img className='burger_menu mobil' src={IconMenu} alt="" />}
     </div>
       
       
      
</div>
  )
}

export default NavBar