// import { useState, useEffect, useCallback, Dispatch } from 'react';
// import { TimerDisplay } from './TimeDisplay';
// import { ControlButtons } from './ControlButtons';
// import { MoneyDisplay } from './MoneyDisplay';

// type MeetingClockProps = {
//     setMeetingFinishedTime: Dispatch<React.SetStateAction<number>>;
//     costOfMeeting: number;
// };

// export const MeetingClock = ({
//     setMeetingFinishedTime,
//     costOfMeeting,
// }: MeetingClockProps) => {
//     const [time, setTime] = useState<number>(0);
//     const [timerOn, setTimerOn] = useState<boolean>(false);

//     useEffect(() => {
//         let intervalId: string | number | NodeJS.Timeout | undefined;
//         if (timerOn) {
//             intervalId = setInterval(() => {
//                 setTime((prevTime) => prevTime + 1);
//             }, 1000);
//         }
//         return () => clearInterval(intervalId);
//     }, [timerOn]);

//     const handleStart = useCallback(() => setTimerOn(true), []);
//     const handlePauseResume = useCallback(
//         () => setTimerOn((prev) => !prev),
//         []
//     );
//     const handleStop = useCallback(() => {
//         setMeetingFinishedTime(time);
//         setTime(0);
//         setTimerOn(false);
//     }, [time, setMeetingFinishedTime]);

//     return (
//         <div className="flex flex-col items-center space-y-4">
//             <TimerDisplay time={time} />
//             <ControlButtons
//                 timerOn={timerOn}
//                 time={time}
//                 handleStart={handleStart}
//                 handlePauseResume={handlePauseResume}
//                 handleStop={handleStop}
//             />
//             <MoneyDisplay costOfMeeting={costOfMeeting} />
//         </div>
//     );
// };
