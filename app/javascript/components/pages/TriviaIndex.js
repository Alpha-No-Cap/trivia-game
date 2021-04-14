import React, { useState, Component } from "react";
import {
	ButtonDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledButtonDropdown,
} from "reactstrap";

const getUrl = (category, difficulty) =>
	`https://opendb.com/api.php?amount=50&category=${category}&difficulty=${difficulty}`;
// const fetcher = (url) => {};

const TriviaIndex = (props) => {
	const [dropdownOpen, setOpen] = useState(false);
	const [dropdownCat, setOpenCat] = useState(false);
	const toggle = () => setOpen(!dropdownOpen);
	const toggleCat = () => setOpenCat(!dropdownCat);
	const [difficulty, setDifficulty] = useState();
	const [category, setCategory] = useState();
	const onSubmit = () => {
		const url = getUrl(category, difficulty);
		console.log(url);
		// const result = await fetcher(url)
		// console.log(result)
		return url;
	};

	console.log(props.categories);
	console.log(difficulty);
	console.log(category);

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
