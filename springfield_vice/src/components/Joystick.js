import React from "react";
import Joystick from "react-joystick";
import config from "./configSpringfieldVice.json";

// Options à garder en entier le temps des tests.

const joystickOptions = {
	zone: document.getElementById("test"), // Où mettre l'élément
	//  color: '#fff',                        // Couleur du js (blanc par défaut)
	//  size: 100,                            // Taille du js (100 par défaut)
	threshold: 0.5, // Force nécessaire (entre 0 et 1)
	//  fadeTime: 250,                        // Temps d'apparition (250 s. par défaut)
	//  multitouch: true,                     // Pas en mode 'static' ou 'semi' : a voir
	//  maxNumberOfNipples: 2,                // En MT, le nombre maxi d'instances
	dataOnly: false, // Que les données en sortie (et plus de joystick !)
	position: { left: "80px", bottom: "80px" }, // Position en mode 'static' : {left: '10%', bottom: '10%'}
	mode: "static", // 'dynamic', 'static' ou 'semi'
	restJoystick: true, // Retour au centre du js quand repos
	restOpacity: 0.7, // Opacité - hors mode 'dynamic' (défaut à 0.5)
	lockX: false, // Bloqué sur l'axe horizontal (?)
	lockY: false, // Bloqué sur l'axe vertical (?)
	//  catchDistance: 50,                    // En mode 'semi', périmètre réservé pour garder le js
	dynamicPage: true // Mettre true si DOM dynamique (comme react)
};

const joystickContainer = {
	// possibiité de limiter la place du joystick
	height: "100%",
	overflow: "hidden"
};

class JoyWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	managerListener = (manager) => {
		manager.on("start", () => {
			// Appui par pression
			this.props.move(
				Math.floor(manager[0].frontPosition.x) / config.joystick.vitesseX,
				Math.floor(manager[0].frontPosition.y) / config.joystick.vitesseY
			);
		});
		manager.on("move", () => {
			// Action à l'appui long
			this.props.move(
				Math.floor(manager[0].frontPosition.x) / config.joystick.vitesseX,
				Math.floor(manager[0].frontPosition.y) / config.joystick.vitesseY
			);
		});
		manager.on("end", () => {
			// Action au relacher
			this.props.stopMove();
		});
	};

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
