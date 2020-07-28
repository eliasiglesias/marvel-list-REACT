import React from "react";
import { Button } from "reactstrap";

const PaginationNextOrPrevious = (props) => {
	return (
		<>
			<Button
				onClick={props.changePrevious}
				color="outline-warning"
				className="ml-md-5 pb-2"
			>
				{"<|"}
			</Button>
			<Button
				onClick={props.changeNext}
				color="outline-warning"
				className="ml-2 pb-2"
			>
				{"|>"}
			</Button>
		</>
	);
};

export default PaginationNextOrPrevious;
