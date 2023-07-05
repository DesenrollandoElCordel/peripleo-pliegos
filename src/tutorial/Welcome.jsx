import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IoMdCheckboxOutline, IoMdSquareOutline } from 'react-icons/io';

import { BEEN_HERE_TOKEN } from './Tutorial';

const Welcome = props => {

  const [ checked, setChecked ] = useState(false);

  const toggleDoNotShow = () => {
    if (checked)
      localStorage.removeItem(BEEN_HERE_TOKEN);
    else 
      localStorage.setItem(BEEN_HERE_TOKEN, true);
    
    setChecked(!checked);
  }

  return ReactDOM.createPortal(
    <div className="p6o-welcome-wrapper">
      <div className="p6o-welcome">
        <h1>Bienvenido!</h1>

        <p className="p6o-welcome-intro">
          Este mapa le permite explorar los lugares mencionados en la colección de pliegos de cordel españoles conservados en la Biblioteca Universitaria de Ginebra.
        </p>
        <p>
          Forma parte del proyecto <a href="https://desenrollandoelcordel.unige.ch" target="_blank">Desenrollando el cordel</a>, dirigido por la profesora Constance Carta con el apoyo financiero de la fundación filantrópica Famille Sandoz - Monique de Meuron, y se basa en el <a href="https://github.com/sib-swiss/dh-dataviz">código</a> desarrollado por Élisa Nury en el marco del proyecto <a href="https://mark16.sib.swiss/" target="_blank">FNS MARK16 VRE</a>. El código está disponible en <a href="https://github.com/DesenrollandoElCordel/peripleo-pliegos">GitHub</a> (licencia GPLv3).
        </p>
        
        <div className="p6o-welcome-buttons">
          <label>
            <input 
              type="checkbox" 
              checked={checked} 
              onChange={toggleDoNotShow} />

            { checked ? <IoMdCheckboxOutline /> : <IoMdSquareOutline /> }

            <span>No vuelvas a preguntar</span>
          </label>
          
          <button 
            className="p6o-no-thanks"
            onClick={props.onNoThanks}>
            No gracias
          </button>

          <button 
            className="p6o-take-tour"
            onClick={props.onTakeTour}>
            Sí, haz la visita.
          </button>
        </div>

        <div className="p6o-welcome-logos">
          <img src="../../../logos/Desenrollando.logo.color.png" width="120px" style={{marginRight: 10 + 'px'}}/>
          <img src="../../../logos/lettres_noir70.jpg" width="120px" style={{marginRight: 10 + 'px'}}/>
          <img src="../../../logos/01-LOGO_FPFS_NOIR.png" width="200px"/>
        </div>
      </div>
    </div>,

    document.body
  );

}

export default Welcome;
