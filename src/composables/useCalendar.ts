import { WeekDaysType } from "@components/Tracker/Tracker.types";
import { reactive } from "vue";
import { isSameWeek } from "date-fns";

export default () => {
	const weekDays: WeekDaysType = reactive({
		0: {
			dates: [],
			aria: "Sunday",
			label: "Sun",
		},
		1: {
			dates: [],
			aria: "Monday",
			label: "Mon",
		},
		2: {
			dates: [],
			aria: "Tuesday",
			label: "Tue",
		},
		3: {
			dates: [],
			aria: "Wednesday",
			label: "Wed",
		},
		4: {
			dates: [],
			aria: "Thursday",
			label: "Thu",
		},
		5: {
			dates: [],
			aria: "Friday",
			label: "Fri",
		},
		6: {
			dates: [],
			aria: "Saturday",
			label: "Sat",
		},
	});

	const today = new Date();
	const currentMonth = today.getMonth();
	const currentYear = today.getFullYear();
	// Date: 0 goes back to the previous month, so we need to add + 1 to current month to get the correct month
	const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

	for (let i = 0; i < daysInMonth; i++) {
		const date = new Date(currentYear, currentMonth, i + 1);
		const dayOfWeek = date.getDay();
		weekDays[dayOfWeek].dates.push(date);
	}

	const isDateInFirstWeek = (date: Date) => isSameWeek(date, new Date(currentYear, currentMonth, 1));

	return {
		currentMonth,
		currentYear,
		today,
		weekDays,
		isDateInFirstWeek,
	};
};
