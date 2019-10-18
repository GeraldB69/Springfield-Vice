import React from "react";
import "./App.css";
import Homer from "./components/Homer";
import Timer from "./components/Timer";

function App() {
	return (
		<div className="App">
			<Homer positionX="160" positionY="120" />
			<Timer />
		</div>
	);
}

export default App;
