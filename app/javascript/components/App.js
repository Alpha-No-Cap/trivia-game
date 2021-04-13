import React from "react";
import PropTypes from "prop-types";
import mockdata from "./mockdata.js";
import TriviaIndex from "./pages/TriviaIndex";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: mockdata,
		};
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route
						path='/triviaindex'
						render={(props) => (
							<TriviaIndex categories={this.state.categories} />
						)}
					/>
				</Switch>
			</Router>
		);
	}
}

export default App;
