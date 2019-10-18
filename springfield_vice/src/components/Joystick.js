import React, { Component } from "react";
import Joystick from "react-joystick";

import "./joystick.css";

// Options à garder en entier le temps des tests.
const joystickOptions = { 
  zone: document.getElementById('joystick_zone'),  // Où mettre l'élément
//  color: '#fff',                        // Couleur du js (blanc par défaut)
//  size: 100,                            // Taille du js (100 par défaut)
  threshold: 1,                           // Force nécessaire (entre 0 et 1)
//  fadeTime: 250,                        // Temps d'apparition (250 s. par défaut)
//  multitouch: true,                     // Pas en mode 'static' ou 'semi' : a voir
//  maxNumberOfNipples: 2,                // En MT, le nombre maxi d'instances
  dataOnly: false,                        // Que les données en sortie (et plus de joystick !)
  position: {left: '100px', top: '50%'},  // Position en mode 'static' : {left: '10%', bottom: '10%'}
  mode: 'static',                         // 'dynamic', 'static' ou 'semi'
  restJoystick: true,                     // Retour au centre du js quand repos
  restOpacity: 0.7,                       // Opacité - hors mode 'dynamic' (défaut à 0.5) 
//  lockX: true,                          // Bloqué sur l'axe horizontal (?)
//  lockY: true,                          // Bloqué sur l'axe vertical (?)
//  catchDistance: 50,                    // En mode 'semi', périmètre réservé pour garder le js
  dynamicPage: true,                      // Mettre true si DOM dynamique (comme react)
};

const joystickContainer = {
  // possibiité de limiter la place du joystick
  height: "100%",
  overflow: "hidden"
};

class JoyWrapper extends Component {

  constructor(props) {
    super(props);
    this.managerListener = this.managerListener.bind(this);
  }

  detectMovement = (offsetX, offsetY) => {
    const diag_value = 20; // seuil pour la diagonale
    if (offsetX > 0) {
      offsetY > diag_value ? this.props.toTheBottom() : this.props.toTheRight();
      offsetY < -(diag_value) ? this.props.toTheTop() : this.props.toTheRight();
    } else {
      offsetY > diag_value ? this.props.toTheBottom() : this.props.toTheLeft();
      offsetY < -(diag_value) ? this.props.toTheTop() : this.props.toTheLeft();
    }
  }

  managerListener(manager) {
    manager.on("start", () => { // Appui par pression
//      this.detectMovement(manager[0].frontPosition.x, manager[0].frontPosition.y);
//      console.log(manager[0].frontPosition.x, manager[0].frontPosition.y);
    });
    manager.on("move", () => { // Action à l'appui long
      this.detectMovement(manager[0].frontPosition.x, manager[0].frontPosition.y);
      console.log(manager[0].frontPosition.x, manager[0].frontPosition.y);
    });
    manager.on("end", () => { // Action au relacher
    });
  }

  render() {
    return (
      <div id="joystick">
          <Joystick
            options={joystickOptions}
            containerStyle={joystickContainer}
            managerListener={this.managerListener} 
          />
      </div>
    );
  }

}

export default JoyWrapper;
