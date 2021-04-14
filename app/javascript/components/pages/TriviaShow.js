import React, { Component } from "react";

class TriviaShow extends Component {
	render() {
		console.log(this.props.questions.results[1]);
		const { getQuestions } = this.props;
		return <>{getQuestions.results[1].question}</>;
	}
}
export default TriviaShow;
