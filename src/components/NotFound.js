import React from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<Row className="d-flex justify-content-center mt-4">
			<Col xs="6">
				<h1 className="mt-3">ERROR 404 - Página no encontrada</h1>
				<h3 className="mt-3 text-secondary">
					<em>
						"Lo importante no es ganar cada batalla, sino ganar la guerra."
					</em>
				</h3>
				<div className="d-flex justify-content-center">
					<Link className="btn btn-outline-danger mt-4 " to="/">
						Vuelve a luchar
					</Link>
				</div>
			</Col>
		</Row>
	);
};

export default NotFound;
