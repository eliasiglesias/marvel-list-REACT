import React, { useState } from "react";
import { Input, Button } from "reactstrap";

const SearchFilter = (props) => {
	const [inputText, setInputText] = useState();

	const changeInputText = (event) => {
		setInputText(event.target.value);
	};

	return (
		<>
			<Input
				placeholder="Buscar personaje"
				onChange={changeInputText}
				className="mr-2"
			></Input>
			<Button
				color="outline-success"
				onClick={() => props.setInputText(inputText)}
			>
				Buscar
			</Button>
		</>
	);
};

export default SearchFilter;
