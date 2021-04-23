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
import { capitalize } from "lodash";

const TriviaIndex = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  const [dropdownCat, setOpenCat] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const toggleCat = () => setOpenCat(!dropdownCat);
  const [difficulty, setDifficulty] = useState("Select Difficulty");
  const [category, setCategory] = useState();
  const [categoryLabel, setCategoryLabel] = useState("Select Category");
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
            <DropdownToggle caret>{categoryLabel}</DropdownToggle>

            <DropdownMenu>
              {props.categories.trivia_categories.map((category) => {
                const handlSetCategory = () => {
                  setCategory(category.id);
                  setCategoryLabel(category.name);
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
            <DropdownToggle caret>{capitalize(difficulty)}</DropdownToggle>

            <DropdownMenu>
              <DropdownItem onClick={() => setDifficulty("easy")}>
                Easy
              </DropdownItem>
              <DropdownItem onClick={() => setDifficulty("medium")}>
                Medium
              </DropdownItem>
              <DropdownItem onClick={() => setDifficulty("hard")}>
                Hard
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
          <div className="submit">
            <Button onClick={onSubmit}>Submit</Button>
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
