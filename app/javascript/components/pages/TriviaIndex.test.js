import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TriviaIndex from "./TriviaIndex";

Enzyme.configure({ adapter: new Adapter() });

describe("When TriviaIndex renders", () => {
	it("it displays dropdown menus", () => {
		const mockCategories = {
			trivia_categories: [
				{ id: 9, name: "General Knowledge" },
				{ id: 10, name: "Entertainment: Books" },
				{ id: 11, name: "Entertainment: Film" },
				{ id: 12, name: "Entertainment: Music" },
				{ id: 13, name: "Entertainment: Musicals & Theatres" },
				{ id: 14, name: "Entertainment: Television" },
				{ id: 15, name: "Entertainment: Video Games" },
				{ id: 16, name: "Entertainment: Board Games" },
				{ id: 17, name: "Science & Nature" },
				{ id: 18, name: "Science: Computers" },
				{ id: 19, name: "Science: Mathematics" },
				{ id: 20, name: "Mythology" },
				{ id: 21, name: "Sports" },
				{ id: 22, name: "Geography" },
				{ id: 23, name: "History" },
				{ id: 24, name: "Politics" },
				{ id: 25, name: "Art" },
				{ id: 26, name: "Celebrities" },
				{ id: 27, name: "Animals" },
				{ id: 28, name: "Vehicles" },
				{ id: 29, name: "Entertainment: Comics" },
				{ id: 30, name: "Science: Gadgets" },
				{ id: 31, name: "Entertainment: Japanese Anime & Manga" },
				{ id: 32, name: "Entertainment: Cartoon & Animations" },
			],
		};

		const renderedTriviaIndex = shallow(
			<TriviaIndex categories={mockCategories} />
		);

		const renderedT = renderedTriviaIndex.find("DropdownToggle");

		//how to target specific nodes in a wrapper
		//try
		expect(renderedT.at(0).text()).toEqual("<DropdownToggle />");
		expect(renderedT.at(1).text()).toEqual("<DropdownToggle />");
	});
});

describe("When TriviaIndex renders", () => {
	it("it displays dropdown menus", () => {
		const mockCategories = {
			trivia_categories: [
				{ id: 9, name: "General Knowledge" },
				{ id: 10, name: "Entertainment: Books" },
				{ id: 11, name: "Entertainment: Film" },
				{ id: 12, name: "Entertainment: Music" },
				{ id: 13, name: "Entertainment: Musicals & Theatres" },
				{ id: 14, name: "Entertainment: Television" },
				{ id: 15, name: "Entertainment: Video Games" },
				{ id: 16, name: "Entertainment: Board Games" },
				{ id: 17, name: "Science & Nature" },
				{ id: 18, name: "Science: Computers" },
				{ id: 19, name: "Science: Mathematics" },
				{ id: 20, name: "Mythology" },
				{ id: 21, name: "Sports" },
				{ id: 22, name: "Geography" },
				{ id: 23, name: "History" },
				{ id: 24, name: "Politics" },
				{ id: 25, name: "Art" },
				{ id: 26, name: "Celebrities" },
				{ id: 27, name: "Animals" },
				{ id: 28, name: "Vehicles" },
				{ id: 29, name: "Entertainment: Comics" },
				{ id: 30, name: "Science: Gadgets" },
				{ id: 31, name: "Entertainment: Japanese Anime & Manga" },
				{ id: 32, name: "Entertainment: Cartoon & Animations" },
			],
		};

		const renderedTriviaIndex = shallow(
			<TriviaIndex categories={mockCategories} />
		);

		const renderedT = renderedTriviaIndex.find("DropdownMenu");

		//how to target specific nodes in a wrapper
		//try
		expect(renderedT.at(0).text()).toEqual("<DropdownMenu />");
		expect(renderedT.at(1).text()).toEqual("<DropdownMenu />");
	});
});

describe("When TriviaIndex renders", () => {
	it("it displays leaderboard button", () => {
		const mockCategories = {
			trivia_categories: [
				{ id: 9, name: "General Knowledge" },
				{ id: 10, name: "Entertainment: Books" },
				{ id: 11, name: "Entertainment: Film" },
				{ id: 12, name: "Entertainment: Music" },
				{ id: 13, name: "Entertainment: Musicals & Theatres" },
				{ id: 14, name: "Entertainment: Television" },
				{ id: 15, name: "Entertainment: Video Games" },
				{ id: 16, name: "Entertainment: Board Games" },
				{ id: 17, name: "Science & Nature" },
				{ id: 18, name: "Science: Computers" },
				{ id: 19, name: "Science: Mathematics" },
				{ id: 20, name: "Mythology" },
				{ id: 21, name: "Sports" },
				{ id: 22, name: "Geography" },
				{ id: 23, name: "History" },
				{ id: 24, name: "Politics" },
				{ id: 25, name: "Art" },
				{ id: 26, name: "Celebrities" },
				{ id: 27, name: "Animals" },
				{ id: 28, name: "Vehicles" },
				{ id: 29, name: "Entertainment: Comics" },
				{ id: 30, name: "Science: Gadgets" },
				{ id: 31, name: "Entertainment: Japanese Anime & Manga" },
				{ id: 32, name: "Entertainment: Cartoon & Animations" },
			],
		};
		const renderedTriviaIndex = shallow(
			<TriviaIndex categories={mockCategories} />
		);

		const renderedT = renderedTriviaIndex.find("Button");

		//how to target specific nodes in a wrapper
		//try
		expect(renderedT.at(0).text()).toEqual("<Button />");
		expect(renderedT.at(1).text()).toEqual("<Button />");
	});
});
