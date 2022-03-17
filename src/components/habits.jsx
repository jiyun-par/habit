import Habit from "./habit";
import HabitAddForm from "./HabitAddForm";
import React from "react";

const Habits = ({ habit, onIncrement, onDecrement, onDelete, onAdd, onReset }) => {
	return (
		<div>
			<HabitAddForm habit={habit} onAdd={onAdd} />
			<ul>
				{habit.map((habit) => (
					//habit 이라는 props에 habit 요소를 전달 해준다

					<Habit
						key={habit.id}
						habit={habit}
						onIncrement={onIncrement}
						onDecrement={onDecrement}
						onDelete={onDelete}
					/>
				))}
			</ul>
			<button type="button" className="habits-reset" onClick={onReset}>
				Reset
			</button>
		</div>
	);
};

export default Habits;
