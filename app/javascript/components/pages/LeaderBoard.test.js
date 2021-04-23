import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LeaderBoard from "./LeaderBoard";

Enzyme.configure({ adapter: new Adapter() });

describe("When LeaderBoard renders", () => {   
	it("displays LeaderBoard headings for columns", () => {
        const leaderBoard = shallow(<LeaderBoard />);
		const renderedBoard = leaderBoard.find("th");
		expect(renderedBoard.at(0).text()).toEqual("#");
        expect(renderedBoard.at(1).text()).toEqual("Score");
        expect(renderedBoard.at(2).text()).toEqual("User ID");
        expect(renderedBoard.at(3).text()).toEqual("Category");
        expect(renderedBoard.at(4).text()).toEqual("Difficulty");
	});
    it("displays LeaderBoard body", () => {
        const leaderBoard = shallow(<LeaderBoard />);
		const renderedRow = leaderBoard.find("tbody");
        expect(renderedRow.length).toEqual(1);
	});
    it("displays on leaderboard there are 10 instances of headers, 5 for the game board, 5 for the game", () => {

        const categoriesName =
		{  9:  "General Knowledge" ,
		  10:  "Entertainment: Books" ,
		  11:  "Entertainment: Film" ,
		  12:  "Entertainment: Music" ,
		  13:  "Entertainment: Musicals & Theatres" ,
		  14:  "Entertainment: Television" ,
		  15:  "Entertainment: Video Games" ,
		  16:  "Entertainment: Board Games" ,
		  17:  "Science & Nature" ,
		  18:  "Science: Computers" ,
		  19:  "Science: Mathematics" ,
		  20:  "Mythology" ,
		  21:  "Sports" ,
		  22:  "Geography" ,
		  23:  "History" ,
		  24:  "Politics" ,
		  25:  "Art" ,
		  26:  "Celebrities" ,
		  27:  "Animals" ,
		  28:  "Vehicles" ,
		  29:  "Entertainment: Comics" ,
		  30:  "Science: Gadgets" ,
		  31:  "Entertainment: Japanese Anime & Manga" ,
		 32:"Entertainment: Cartoon & Animations"}

         const game = 
         [{
            score: 100, 
            streak: 0,
            category: 9, 
            difficulty: 'easy',
            user_id: 1
        }]

        const leaderBoard = shallow(<LeaderBoard 
            categories={categoriesName} 
            games={game}
        />);
		const renderedRow = leaderBoard.find("td");
        expect(renderedRow.length).toEqual(4);
	});
});