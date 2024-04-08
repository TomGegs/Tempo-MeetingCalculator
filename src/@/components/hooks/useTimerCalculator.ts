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
    const [time, setTime] = useState<number>(0);
    const [timerOn, setTimerOn] = useState<boolean>(false);
    const [costTracker, setCostTracker] = useState<number>(0);
    const [tenMinBlock, setTenMinBlock] = useState<number>(0);
    const [resetAnimation, setResetAnimation] = useState<number>(0);

    // Calculate salary per second based on the selected time frame and average salary
    const calculateSalaryPerSecond = useCallback(() => {
        const timeFrames = {
            Yearly: workSecondsPerYear,
            Monthly: workSecondsPerMonth,
            Weekly: workSecondsPerWeek,
            Daily: workSecondsPerDay,
        };
        const seconds = timeFrames[formData.timeFrame] || 0; // Default to 0 if time frame is not found
        return (formData.avgSalary / seconds) * formData.numPeople; // Total cost per second for all people
    }, [formData]);

    // Timer Logic: Increment time and cost tracker every 0.1 seconds when the timer is on
    useEffect(() => {
        if (timerOn) {
            const intervalId = setInterval(() => {
                setTime((prevTime) => prevTime + 0.1);
                setCostTracker(
                    (prevCost) => prevCost + calculateSalaryPerSecond() / 10
                );
            }, 100);
            return () => clearInterval(intervalId);
        }
    }, [timerOn, calculateSalaryPerSecond]);

    // Estimated cost for a 10-minute block
    useEffect(() => {
        setTenMinBlock(calculateSalaryPerSecond() * 600); // 600 seconds in 10 minutes
    }, [calculateSalaryPerSecond]);

    // Button Logic: Start, Pause/Resume, Reset
    const handleStart = useCallback(() => setTimerOn(true), []);
    const handlePauseResume = useCallback(
        () => setTimerOn((prev) => !prev),
        []
    );
    const handleReset = useCallback(() => {
        setTime(0);
        setCostTracker(0);
        setResetAnimation((prev) => prev + 1);
        setTimerOn(false);
    }, []);

    // Debugging: Log calculated values for verification
    useEffect(() => {
        console.log('Salary per second:', calculateSalaryPerSecond());
        console.log('Cost Tracker:', costTracker);
        console.log('Time:', time);
    }, [calculateSalaryPerSecond, costTracker, time]);

    return {
        time,
        timerOn,
        costTracker,
        tenMinBlock,
        resetAnimation,
        handleStart,
        handlePauseResume,
        handleReset,
    };
};
