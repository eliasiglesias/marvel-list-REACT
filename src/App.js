import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";
import { Container } from "reactstrap";

function App() {
	return (
		<Container>
			<Router>
				<Routes />
			</Router>
		</Container>
	);
}

export default App;
