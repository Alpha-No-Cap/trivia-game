import React from "react";
import PropTypes from "prop-types";
import mockdata from "./mockdata.js";
import TriviaIndex from "./pages/TriviaIndex";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import mockquestions from "./mockquestions.js";
import TriviaShow from "./pages/TriviaShow";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: mockdata,
			questions: [],
		};
	}
	componentDidMount() {
		console.log("yo");
		this.getQuestions();
	}

	getQuestions = () => {
		console.log("hello");
		fetch("http://opentdb.com/api.php?category=10&difficulty=medium&amount=30")
			.then((response) => {
				return response.json();
			})
			.then((payload) => {
				this.setState({ questions: payload });
				console.log(payload);
			})
			.catch((errors) => {
				console.log("questions errors", errors);
			});
	};

	render() {
		console.log("hi");
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
					<Route
						path='/triviashow/:id'
						render={(props) => {
							console.log(this.state.questions);
							const id = +props.match.params.id;

							return <TriviaShow question={this.state.questions.results[id]} />;
						}}
					/>
				</Switch>
			</Router>
		);
	}
}

export default App;
