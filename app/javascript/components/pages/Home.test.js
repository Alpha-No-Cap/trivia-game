import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "./Home";

Enzyme.configure({ adapter: new Adapter() });

describe("When app renders", () => {
	it("it displays Home", () => {
		const renderedHome = shallow(<Home />);

		const renderedH = renderedHome.find("h1");

		expect(renderedH.length).toEqual(1);
	});
});
