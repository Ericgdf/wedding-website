import React from 'react'
import './gift_list_section.css'

const Gift_list_section = () => {
  return (
    <div className='gift_background'>
        <h2 className='section_title gift' id='gift'>Liste de mariage</h2>
        <a className="a_disabled"href="https://www.milirose.com/liste-cadeaux-613037.html" target="_blank"></a>
        <button className='disabled' disabled> 🏗️ Liste en construction.</button>
    </div>
  )
}

export default Gift_list_section