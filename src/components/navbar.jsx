import React from "react";

const navbar = (props) => {
	return (
		<nav className="navbar">
			<i className="navbar-logo fa-solid fa-book-open-reader"></i>
			<span>Habit Tracker</span>
			<span className="navbar-count">{props.totalCount}</span>
		</nav>
	);
};

export default navbar;
