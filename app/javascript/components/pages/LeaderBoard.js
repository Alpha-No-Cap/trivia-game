import React from "react";
import { NavLink } from "react-router-dom";
import { Table, Button } from "reactstrap";
const _ = require("lodash");

const LeaderBoard = (props) => {
  const category_names = {
    9: "General Knowledge",
    10: "Entertainment: Books",
    11: "Entertainment: Film",
    12: "Entertainment: Music",
    13: "Entertainment: Musicals & Theatres",
    14: "Entertainment: Television",
    15: "Entertainment: Video Games",
    16: "Entertainment: Board Games",
    17: "Science & Nature",
    18: "Science: Computers",
    19: "Science: Mathematics",
    20: "Mythology",
    21: "Sports",
    22: "Geography",
    23: "History",
    24: "Politics",
    25: "Art",
    26: "Celebrities",
    27: "Animals",
    28: "Vehicles",
    29: "Entertainment: Comics",
    30: "Science: Gadgets",
    31: "Entertainment: Japanese Anime & Manga",
    32: "Entertainment: Cartoon & Animations"
  };

  console.log(props.games);
  const sorted = _.sortBy(props.games, "score").reverse();

  return (
    <>
      <Table size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Score</th>
            <th>User ID</th>
            <th>Category</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((field, index) => {
            return (
              <tr key={field.id}>
                <th scope="row">{index + 1}</th>
                <td>{field.score}</td>
                <td>{field.user_id}</td>
                <td>{category_names[field.category]}</td>
                <td>{field.difficulty}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <NavLink to="/triviaindex">
        <Button>Main Menu</Button>
      </NavLink>
    </>
  );
};

export default LeaderBoard;
