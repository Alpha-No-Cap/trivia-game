import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TriviaShow from "./TriviaShow";

Enzyme.configure({ adapter: new Adapter() });

describe("When triviaShow renders", () => {
	it("it displays Score and Lives", () => {
		const question_mock = { question: [ 
			{
				category: "Entertainment: Board Games",
				type: "boolean",
				difficulty: "easy",
				question: "Snakes and Ladders was originally created in India?",
				correct_answer: "True",
				incorrect_answers: ["False"]
			  }
			]
		};

		const renderedQuestions = shallow(<TriviaShow score={0} lives={4} question={ question_mock[1] } />)

		const renderedQ = renderedQuestions.find("h3");

		expect(renderedQ.length).toEqual(3);
	});
});
