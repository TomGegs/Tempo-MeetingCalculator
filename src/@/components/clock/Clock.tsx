import { useState, useEffect, useRef, useCallback } from 'react';
import { FinishedTime } from './FinishedTime';
import { TimerDisplay } from './TimeDisplay';
import { ControlButtons } from './ControlButtons';

export const Clock = () => {
    const [time, setTime] = useState<number>(0);
    const [timerOn, setTimerOn] = useState<boolean>(false);
    const [laps, setLaps] = useState<number[]>([]);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (timerOn) {
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [timerOn]);

    const handleStart = useCallback(() => setTimerOn(true), []);
    const handlePauseResume = useCallback(
        () => setTimerOn((prev) => !prev),
        []
    );
    const handleStop = useCallback(() => {
        setLaps((prevLaps) => [...prevLaps, time]);
        setTime(0);
        setTimerOn(false);
    }, [time]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
            <div className="space-y-4">
                <TimerDisplay time={time} />
                <ControlButtons
                    timerOn={timerOn}
                    time={time}
                    handleStart={handleStart}
                    handlePauseResume={handlePauseResume}
                    handleStop={handleStop}
                />
                <FinishedTime laps={laps} />
            </div>
        </div>
    );
};
