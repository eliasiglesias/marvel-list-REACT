import React from "react";

const LimitSelect = (props) => {
	const { changeLimit } = props;

	return (
		<select onChange={changeLimit} className="text-secondary rounded ml-auto">
			<option value="5">5</option>
			<option value="10">10</option>
			<option value="20" selected>
				20
			</option>
			<option value="30">30</option>
			<option value="40">40</option>
		</select>
	);
};

export { LimitSelect };
