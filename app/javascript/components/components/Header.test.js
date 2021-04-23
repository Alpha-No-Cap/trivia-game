import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header";

Enzyme.configure({ adapter: new Adapter() });

describe("When app renders", () => {
	it("it displays Header", () => {
		const renderedHome = shallow(<Header />);

		const renderedH = renderedHome.find("h2");

		expect(renderedH.length).toEqual(1);
	});
});