import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import PersonagesTable from "./PersonagesTable";
import PersonageDetail from "./PersonageDetail";
import NotFound from "./NotFound";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<HomePage />
			</Route>
			<Route exact path="/personages">
				<PersonagesTable />
			</Route>
			<Route exact path="/personages/:id">
				<PersonageDetail />
			</Route>
			<Route path="*">
				<NotFound />
			</Route>
		</Switch>
	);
};

export default Routes;
