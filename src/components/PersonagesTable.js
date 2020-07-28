import React, { useState, useEffect } from "react";
import getApiPersonages from "../api/getApiPersonages";
import { Table, Row, Col, Spinner } from "reactstrap";
import { Link } from "react-router-dom";
import HomeButton from "./HomeButton";
import SearchFilter from "./SearchFilter";
import { LimitSelect } from "./LimitSelect";
import OrderSelect from "./OrderSelect";
import PaginationNextOrPrevious from "./PaginationNextOrPrevious";

const PersonagesTable = () => {
	const [personages, setPersonages] = useState();
	const [inputText, setInputText] = useState();
	const [limit, setLimit] = useState(20);
	const [order, setOrder] = useState("name");
	const [offset, setOffset] = useState(0);

	const changeInputText = (text) => {
		setInputText(text);
	};

	const changeLimit = (event) => {
		setLimit(parseInt(event.target.value));
		setOffset(0);
	};

	const changeOrder = (event) => {
		setOrder(event.target.value);
	};

	const changeToNextPage = () => {
		setOffset(offset + limit);
	};

	const changeToPreviousPage = () => {
		if (offset >= limit) {
			setOffset(offset - limit);
		}
	};

	useEffect(() => {
		async function getApi() {
			const result = await getApiPersonages(inputText, limit, order, offset);
			setPersonages(result);
		}
		getApi();
	}, [inputText, limit, order, offset]);

	return (
		<Row className="d-flex justify-content-center mt-3">
			<Col xs="12">
				<HomeButton />
			</Col>

			{personages ? (
				<>
					<Col xs="8" md="3" className="d-flex">
						<SearchFilter setInputText={changeInputText} />
					</Col>
					<Col xs="8" md="2" className="d-flex">
						<OrderSelect changeOrder={changeOrder} />
					</Col>
					<Col xs="5" md="2" className="d-flex">
						<PaginationNextOrPrevious
							changeNext={changeToNextPage}
							changePrevious={changeToPreviousPage}
						/>
					</Col>
					<Col xs="4" md="2" className="d-flex">
						<LimitSelect changeLimit={changeLimit} />
					</Col>

					<Col xs="10" className="px-5 mt-3">
						<Table className="text-center table-info shadow">
							<thead className="alert-warning">
								<tr>
									<th>ID</th>
									<th>NAME</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{personages.map((personage, index) => (
									<tr key={`personage:${index}`}>
										<th scope="row">{personage.id}</th>
										<td>{personage.name}</td>
										<td>
											<Link
												to={`/personages/${personage.id}`}
												className="btn btn-outline-success"
											>
												Más info
											</Link>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					</Col>
				</>
			) : (
				<Spinner
					style={{ width: "4.5rem", height: "4.5rem" }}
					color="success"
				/>
			)}
		</Row>
	);
};

export default PersonagesTable;
