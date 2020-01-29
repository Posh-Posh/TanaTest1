import React from 'react';

function Menu(props) {
  
  return (
    <nav role="navigation" className="nav">
      <button type="button" className="nav-btn-toggle" aria-expanded="false" aria-controls="navigation-list">Menu</button>

      <ul className="nav-list" id="navigation-list">
        <li className="nav-item"><a href="/">Accueil</a></li>
        <li className="nav-item"><a href="/">Outils</a></li>
        <li className="nav-item"><a href="/">Services</a></li>
        <li className="nav-item"><a href="/">Références</a></li>
        <li className="nav-item"><a href="/">À propos</a></li>
        <li className="nav-item"><a href="/">Blog</a></li>
      </ul>
    </nav>
  )
}

export default Menu; 