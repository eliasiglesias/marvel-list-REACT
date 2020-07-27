import React from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<Row className="d-flex justify-content-center">
			<Col xs="8" className="mt-3 d-flex justify-content-center">
				<h2>MARVEL PAGE</h2>
			</Col>
			<Col xs="8" className="mt-3 d-flex justify-content-center">
				<p>
					Bienvenido a la página de búsqueda de personajes de Marvel más
					completa a nivel español! Encuentra todos los personajes que te han
					marcado la infancia aquí!
				</p>
			</Col>
			<Col xs="8" className="mt-3 d-flex justify-content-center">
				<Link to="/personages" className="btn btn-outline-info">
					Lista de Personajes
				</Link>
			</Col>
		</Row>
	);
};

export default HomePage;
