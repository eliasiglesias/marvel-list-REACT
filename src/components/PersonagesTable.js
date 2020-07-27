import React, { useState, useEffect } from "react";
import getApiPersonages from "../api/getApiPersonages";
import { Table, Row, Col, Spinner } from "reactstrap";
import { Link } from "react-router-dom";
import HomeButton from "./HomeButton";

const PersonagesTable = () => {
	const [personages, setPersonages] = useState();

	useEffect(() => {
		async function getApi() {
			const result = await getApiPersonages();
			setPersonages(result);
		}
		getApi();
	}, []);

	return (
		<Row className="d-flex justify-content-center mt-3">
			<Col xs="12">
				<HomeButton />
			</Col>

			{personages ? (
				<Col xs="6">
					<Table className="text-center table-info shadow">
						<thead className="alert-warning">
							<tr>
								<th>ID</th>
								<th>NAME</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{personages.map((personage) => (
								<tr>
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
