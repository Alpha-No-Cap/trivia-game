import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "./Home";

Enzyme.configure({ adapter: new Adapter() });

describe("When app renders", () => {
	it("it displays Home", () => {
		const renderedHome = shallow(<Home />);

		const renderedH = renderedHome.find("h4");

		expect(renderedH.length).toEqual(1);
	});
	it("it renders play game button", () => {
		const renderedHome = shallow(<Home />);

		const renderedB = renderedHome.find("Button");

		expect(renderedB.length).toEqual(2);
	});
	it("play game button event",() => {
		const mockClick = jest.fn();

		const renderedHome = shallow(<Home href={mockClick}/>);

		const buttonClick = renderedHome.find("Button").at(1).simulate("click");

		expect(buttonClick.length).toEqual(1)
	});
	
});