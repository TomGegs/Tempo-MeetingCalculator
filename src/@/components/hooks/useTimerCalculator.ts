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
    const [tenMinBlock, setTenMinBlock] = useState<number>(0);
    const [resetAnimation, setResetAnimation] = useState<number>(0);

    //Salary Per Second Logic
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
        let intervalId: number | NodeJS.Timeout | undefined;
        if (timerOn) {
            intervalId = setInterval(() => {
                setTime((prevTime) => prevTime + 0.1); // Increment by 0.1 every 0.1 seconds
            }, 100);
        }
        return () => clearInterval(intervalId);
    }, [timerOn]);

    //Cost Tracker Logic
    useEffect(() => {
        let intervalId: number | NodeJS.Timeout | undefined;
        const salaryPerInterval = salaryPerSecond / 10; // Increment by 1/10th of salary per second every 0.1 seconds
        if (timerOn) {
            intervalId = setInterval(() => {
                setCostTracker(
                    (prevSalaryPerSecond) =>
                        prevSalaryPerSecond + salaryPerInterval
                );
            }, 100);
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
        setResetAnimation(resetAnimation + 1);
        setTimerOn(false);
    }, [
        time,
        setMeetingFinishedTime,
        costTracker,
        setCostOfMeeting,
        resetAnimation,
    ]);

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

    //Estimated Meeting Cost Logic
    useEffect(() => {
        const tenMinBlockEst = salaryPerSecond * formData.numPeople * 600; // Salary per second multiplied by 10 min in seconds
        setTenMinBlock(tenMinBlockEst);
    }, [salaryPerSecond, formData.numPeople]);

    //Return Values
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
        tenMinBlock,
        resetAnimation,
    };
};
