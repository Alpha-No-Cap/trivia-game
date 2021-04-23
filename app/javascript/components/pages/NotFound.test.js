import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotFound from "./NotFound";

Enzyme.configure({ adapter: new Adapter() });

describe("When NotFound renders", () => {
	it("displays Not Found text", () => {
		const notFound = shallow(<NotFound />);

		const renderedN = notFound.find("h1");

		expect(renderedN.length).toEqual(1);
	});
});