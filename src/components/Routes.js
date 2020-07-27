import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import PersonagesTable from "./PersonagesTable";
import PersonageDetail from "./PersonageDetail";

const Routes = () => {
	return (
		<Switch>
			<Route path="/personages/:id">
				<PersonageDetail />
			</Route>
			<Route path="/personages">
				<PersonagesTable />
			</Route>
			<Route path="/">
				<HomePage />
			</Route>
		</Switch>
	);
};

export default Routes;
