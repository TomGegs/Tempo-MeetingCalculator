import { useState, useEffect, useCallback } from 'react';
import {
    workSecondsPerDay,
    workSecondsPerMonth,
    workSecondsPerWeek,
    workSecondsPerYear,
} from '../utils/SALARY_CALCULATIONS';

type useTimerCalculatorProps = {
    formData: {
        timeFrame: 'Yearly' | 'Monthly' | 'Weekly' | 'Daily';
        numPeople: number;
        avgSalary: number;
    };
};

export const useTimerCalculator = ({ formData }: useTimerCalculatorProps) => {
    const [meetingFinishedTime, setMeetingFinishedTime] = useState<number>(0);
    const [salaryPerSecond, setSalaryPerSecond] = useState<number>(0);
    const [costOfMeeting, setCostOfMeeting] = useState<number>(0);
    const [costTracker, setCostTracker] = useState<number>(0);
    const [time, setTime] = useState<number>(0);
    const [timerOn, setTimerOn] = useState<boolean>(false);

    useEffect(() => {
        function calculateSalaryPerSecond() {
            if (!formData) return;

            let calculatedSalaryPerSecond;
            switch (formData.timeFrame) {
                case 'Yearly':
                    calculatedSalaryPerSecond =
                        formData.avgSalary / workSecondsPerYear;
                    break;
                case 'Monthly':
                    calculatedSalaryPerSecond =
                        formData.avgSalary / workSecondsPerMonth;
                    break;
                case 'Weekly':
                    calculatedSalaryPerSecond =
                        formData.avgSalary / workSecondsPerWeek;
                    break;
                case 'Daily':
                    calculatedSalaryPerSecond =
                        formData.avgSalary / workSecondsPerDay;
                    break;
                default:
                    calculatedSalaryPerSecond = 0;
                    break;
            }
            setSalaryPerSecond(calculatedSalaryPerSecond * formData.numPeople);
        }

        calculateSalaryPerSecond();
    }, [formData]);

    //Timer Logic
    useEffect(() => {
        let intervalId: string | number | NodeJS.Timeout | undefined;
        if (timerOn) {
            intervalId = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [timerOn]);

    //Cost Tracker Logic
    useEffect(() => {
        let intervalId: string | number | NodeJS.Timeout | undefined;
        if (timerOn) {
            intervalId = setInterval(() => {
                setCostTracker(
                    (prevSalaryPerSecond) =>
                        prevSalaryPerSecond + salaryPerSecond
                );
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [timerOn]);

    //Button Logic - Start / Pause / Reset
    const handleStart = useCallback(() => setTimerOn(true), []);
    const handlePauseResume = useCallback(
        () => setTimerOn((prev) => !prev),
        []
    );

    const handleReset = useCallback(() => {
        setMeetingFinishedTime(time);
        setCostOfMeeting(costTracker);
        setTime(0);
        setCostTracker(0);
        setTimerOn(false);
    }, [time, setMeetingFinishedTime, costTracker, setCostOfMeeting]);

    //Meeting Cost Logic
    useEffect(() => {
        const newCost =
            salaryPerSecond * formData.numPeople * meetingFinishedTime;
        setCostOfMeeting(newCost);
    }, [
        meetingFinishedTime,
        salaryPerSecond,
        formData.numPeople,
        setCostOfMeeting,
    ]);

    return {
        salaryPerSecond,
        costOfMeeting,
        setCostTracker,
        costTracker,
        setCostOfMeeting,
        meetingFinishedTime,
        setMeetingFinishedTime,
        time,
        timerOn,
        handleStart,
        handlePauseResume,
        handleReset,
    };
};
