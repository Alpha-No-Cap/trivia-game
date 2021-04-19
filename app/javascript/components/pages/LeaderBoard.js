import React from "react";
import { Table } from "reactstrap";
const _ = require("lodash");

const LeaderBoard = (props) => {
  console.log(props.games);
  const sorted = _.sortBy(props.games, "score").reverse();
  return (
    <Table size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Score</th>
          <th>Streak</th>
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
              <td>{field.streak}</td>
              <td>{field.category}</td>
              <td>{field.difficulty}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default LeaderBoard;
