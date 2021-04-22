import React, { useState, Component } from "react";
import { useHistory, NavLink } from "react-router-dom";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledButtonDropdown,
  Button
} from "reactstrap";

const TriviaIndex = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  const [dropdownCat, setOpenCat] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const toggleCat = () => setOpenCat(!dropdownCat);
  const [difficulty, setDifficulty] = useState();
  const [category, setCategory] = useState();
  const history = useHistory();

  const onSubmit = () => {
    props.setStateCategoryDifficulty(category, difficulty);
    props.url(category, difficulty).then(() => {
      history.push("/triviashow/0");
    });
  };

  return (
    <>
      <div className="index-container">
        <div className="dropdown-container">
          <UncontrolledButtonDropdown isOpen={dropdownCat} toggle={toggleCat}>
            <DropdownToggle caret>Select Category</DropdownToggle>

            <DropdownMenu>
              {props.categories.trivia_categories.map((category) => {
                const handlSetCategory = () => {
                  setCategory(category.id);
                };

                return (
                  <DropdownItem onClick={handlSetCategory} key={category.id}>
                    {category.name}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </UncontrolledButtonDropdown>

          <UncontrolledButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Select Difficulty</DropdownToggle>

            <DropdownMenu>
              <DropdownItem onClick={() => setDifficulty("easy")}>
                easy
              </DropdownItem>
              <DropdownItem onClick={() => setDifficulty("medium")}>
                medium
              </DropdownItem>
              <DropdownItem onClick={() => setDifficulty("hard")}>
                hard
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
          <div className="submit">
            <Button onClick={onSubmit}>submit</Button>
          </div>
          <NavLink to="/leaderboard">
            <Button>Leader Board</Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default TriviaIndex;
