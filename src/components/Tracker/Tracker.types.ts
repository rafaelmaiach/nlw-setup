export interface WeekDayType {
	dates: Date[];
	aria: string;
	label: string;
}

export interface WeekDaysType {
	[key: number]: WeekDayType;
}
