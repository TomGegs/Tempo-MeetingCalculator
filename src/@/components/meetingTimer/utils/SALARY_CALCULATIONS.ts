//Logic of salary per second
//Work days per year in Australia
export const workDaysPerYear = 260;
//Work days per month in Australia
export const workDayPerMonth = 21.67;
//Work days per week in Australia
export const workDayPerWeek = 5;
//Work hours per day in Australia
export const workHoursPerDay = 7.6;

//Work minutes per hour in Australia
export const workMinutesPerHour = 60;
//Work seconds per minute in Australia
export const workSecondsPerMinute = 60;

//Work seconds per hour in Australia -- 3,600
export const workSecondsPerHour = workSecondsPerMinute * workMinutesPerHour;
//Work seconds per day in Australia -- 27,360
export const workSecondsPerDay = workSecondsPerHour * workHoursPerDay;
//Work seconds per week in Australia -- 136,800
export const workSecondsPerWeek = workSecondsPerDay * workDayPerWeek;
//Work seconds per month in Australia -- 592891
export const workSecondsPerMonth = workSecondsPerDay * workDayPerMonth;
//Work seconds per year in Australia -- 7,113,600
export const workSecondsPerYear = workSecondsPerDay * workDaysPerYear;
