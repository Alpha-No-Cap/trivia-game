import React, { useState, Component } from "react";
import {
	ButtonDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

const TriviaIndex = (props) => {
	const [dropdownOpen, setOpen] = useState(false);
	const [dropdownCat, setOpenCat] = useState(false);
	const toggle = () => setOpen(!dropdownOpen);
	const toggleCat = () => setOpenCat(!dropdownCat);

	console.log(props.categories);

	return (
		<>
			<div
				style={{
					width: 300,
					height: 100,
					border: "1px solid #000",
					padding: "8px",
					overflow: "hidden",
				}}
			>
				<ButtonDropdown isOpen={dropdownCat} toggle={toggleCat}>
					<DropdownToggle caret>Select Category</DropdownToggle>

					<DropdownMenu>
						{props.categories.trivia_categories.map((category) => {
							return (
								<DropdownItem key={category.id}>{category.name}</DropdownItem>
							);
						})}
					</DropdownMenu>
				</ButtonDropdown>
			</div>
			<br />
			<div
				style={{
					width: 300,
					height: 100,
					border: "1px solid #000",
					padding: "8px",
					overflow: "hidden",
				}}
			>
				<ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
					<DropdownToggle caret>Select Difficulty</DropdownToggle>

					<DropdownMenu>
						<DropdownItem>easy</DropdownItem>
						<DropdownItem>medium</DropdownItem>
						<DropdownItem>hard</DropdownItem>
					</DropdownMenu>
				</ButtonDropdown>
			</div>
		</>
	);
};

export default TriviaIndex;
