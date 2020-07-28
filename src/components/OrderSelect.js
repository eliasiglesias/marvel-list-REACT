import React from "react";

const OrderSelect = (props) => {
	return (
		<div className="d-flex align-items-center ml-auto ml-md-2">
			<h6 className="pt-2 mr-2">Orden: </h6>
			<select onChange={props.changeOrder} className="rounded border-secondary">
				<option value="name">Nombre ↑</option>
				<option value="-name">Nombre ↓</option>
				<option value="modified">Fecha ↑</option>
				<option value="-modified">Fecha ↓</option>
			</select>
		</div>
	);
};

export default OrderSelect;
