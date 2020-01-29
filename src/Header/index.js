import React from 'react';

/* Components */
import logo from "../../src/img/logo-tanaguru.png";
import Menu from "../../src/Menu";

function Header(props) {

  return(
    <header role="banner" className="header">
      <div className="container">
        <p className="skip-link"><a href="#content">Aller au contenu principal</a></p>

        <div className="header-main-row">
          <p><a href="/"><img src={logo} alt="Tanaguru" width="150" height="49"/></a></p>

          <Menu />
        </div>
      </div>
    </header>
  )
}

export default Header; 