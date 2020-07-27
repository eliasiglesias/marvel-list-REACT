import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
	return (
		<Link to="/" className="btn btn-outline-info">
			Inicio
		</Link>
	);
};

export default HomeButton;
