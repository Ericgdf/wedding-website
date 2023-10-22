import React from 'react'
import '../components/navBar.css'

const NavBar = () => {
  return (
    <div className='nav_background'>
        <h1 className='website_name'>Hortense & Théo</h1>
        <nav className='list_background'>
            <ul>
            <li><a href="#accueil">RSVP</a></li>
            <li><a href="#services">Le Lieux</a></li>
            <li><a href="#a-propos">Programme</a></li>
            <li><a href="#contact">Cadeaux</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
    </nav>
</div>
  )
}

export default NavBar