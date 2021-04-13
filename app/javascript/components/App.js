import React from "react";
import PropTypes from "prop-types";
import mockdata from "./mockdata.js";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: mockdata,
		};
	}

	render() {
		return <React.Fragment></React.Fragment>;
	}
}

export default App;
