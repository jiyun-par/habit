import React, { memo } from "react";

const HabitAddForm = memo((props) => {
	const formRef = React.createRef();
	const inputRef = React.createRef();
	const onSubmit = (event) => {
		event.preventDefault();
		let name = inputRef.current.value;
		if (!name || name.trim() === "") {
			alert("습관을 적어주세요!");
			// inputRef.current.value = "";
			formRef.current.reset();
		} else {
			props.onAdd(name);
			// inputRef.current.value = "";
			formRef.current.reset();
		}
	};

	return (
		<form ref={formRef} className="addform" onSubmit={onSubmit}>
			<input ref={inputRef} maxLength="10" type="text" className="add-input" placeholder="Add your habit" />
			<button type="submit" className="add-button">
				<i className="fa-solid fa-plus"></i>
			</button>
		</form>
	);
});

export default HabitAddForm;
