import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import React, { useState, useCallback } from "react";

const App = (props) => {
	let getlist = JSON.parse(localStorage.getItem("habitlist"));
	if (getlist == null) getlist = [];
	let getHabitlist = getlist ? getlist : [];
	localStorage.setItem("habitlist", JSON.stringify(getHabitlist));

	const [habits, setHabits] = useState(getHabitlist);

	const setStorage = (habitList) => {
		localStorage.setItem("habitlist", JSON.stringify(habitList));
		setHabits((habits) => habitList);
	};

	const handleIncrement = useCallback(
		(habit) => {
			const habitList = habits.map((item) => {
				if (item.id === habit.id) {
					return { ...habit, count: habit.count + 1 };
				}
				return item;
			});
			setStorage(habitList);
		},
		[habits]
	);

	const handleDecrement = useCallback(
		(habit) => {
			const habitList = habits.map((item) => {
				if (item.id === habit.id) {
					return {
						...habit,
						count: habit.count > 0 ? habit.count - 1 : 0,
					};
				}
				return item;
			});
			setStorage(habitList);
		},
		[habits]
	);
	const handleDelete = useCallback((habit) => {
		//id가 같지 않은 요소들로만 다시 배열을 만들어준다
		const habitList = habits.filter((item) => item.id !== habit.id);
		setStorage(habitList);
	});

	const onAdd = useCallback(
		(name) => {
			const habitList = [...habits, { id: Date.now(), name, count: 0 }];
			setStorage(habitList);
		},
		[habits]
	);

	const handleReset = useCallback(() => {
		const habitList = habits.map((habit) => {
			if (habit.count !== 0) {
				return { ...habit, count: 0 };
			}
			return habit;
		});

		setStorage(habitList);
	}, [habits]);

	return (
		<React.StrictMode>
			<Navbar totalCount={habits.filter((item) => item.count > 0).length} />
			<Habits
				habit={habits}
				onIncrement={handleIncrement}
				onDecrement={handleDecrement}
				onDelete={handleDelete}
				onAdd={onAdd}
				onReset={handleReset}
			/>
		</React.StrictMode>
	);
};

export default App;
