import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getPersonageById from "../api/getPersonageById";
import { Row, Col, Spinner } from "reactstrap";
import HomeButton from "./HomeButton";

const PersonageDetail = () => {
	const { id } = useParams();
	const [personage, setPersonage] = useState();

	useEffect(() => {
		async function getApi() {
			const result = await getPersonageById(id);
			setPersonage(result);
		}
		getApi();
	}, [id]);

	return (
		<Row className="d-flex justify-content-center mt-3">
			<Col xs="12">
				<HomeButton />
			</Col>
			{personage ? (
				<>
					<Col xs="7" className="d-flex justify-content-center">
						<h2>
							<span className="text-secondary">PERSONAJE : </span>
							{personage.name}
						</h2>
					</Col>
					<Col xs="7" className="d-flex justify-content-center">
						<h5>
							<span className="text-secondary">ID : </span>
							{personage.id}
						</h5>
					</Col>
					{personage.description && (
						<Col xs="7" className="d-flex flex-column justify-content-center">
							<h6>
								<u>Descripción</u>
							</h6>
							<p className="text-secondary">{personage.description}</p>
						</Col>
					)}

					<Col xs="10" className="d-flex justify-content-center">
						<img
							src={`${personage.thumbnail.path}.${personage.thumbnail.extension}`}
							alt=""
							width="500px"
							height="500px"
						/>
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

export default PersonageDetail;
