import React, { useState, Component } from "react";
import { useHistory } from "react-router-dom";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledButtonDropdown
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
    props.url(category, difficulty).then(() => {
      history.push("/triviashow/0");
    });
  };

  return (
    <>
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

      <br />

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
      <button onClick={onSubmit}>submit</button>
    </>
  );
};

export default TriviaIndex;
