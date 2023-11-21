import { useLocation } from 'react-router-dom';
import { Card, CardContent } from '../../ui/card';
import { useTimerCalculator } from '../hooks/useTimerCalculator';
import { TimerDisplay } from '../meetingClock/TimeDisplay';
import { ControlButtons } from '../meetingClock/ControlButtons';
import { MoneyDisplay } from '../meetingClock/MoneyDisplay';

export const TimerWrapper = () => {
    const location = useLocation();
    const formData = location.state?.formData;

    const {
        salaryPerSecond,
        costTracker,
        time,
        timerOn,
        handleStart,
        handlePauseResume,
        handleReset,
    } = useTimerCalculator({
        formData,
    });

    return (
        <main className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-t from-[#1e1e1e] to-[#191919] p-10 md:p-4">
            <Card className="flex h-full w-full items-center justify-center bg-gradient-to-r from-primary to-violet-950">
                <CardContent>
                    <TimerDisplay time={time} />
                    <MoneyDisplay costOfMeeting={costTracker} />
                    <div className="text-xl text-red-500">
                        {salaryPerSecond}
                    </div>
                </CardContent>
            </Card>
            <ControlButtons
                timerOn={timerOn}
                time={time}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
                handleReset={handleReset}
            />
        </main>
    );
};
