import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TriviaShow from "./TriviaShow";

Enzyme.configure({ adapter: new Adapter() });

describe("When triviaShow renders", () => {
	it("it displays Score and Lives", () => {
		
		const renderedQuestions = shallow(<TriviaShow score={0} lives={4} />);

		const renderedQ = renderedQuestions.find("h3");

		expect(renderedQ.length).toEqual(2);
	});
});
