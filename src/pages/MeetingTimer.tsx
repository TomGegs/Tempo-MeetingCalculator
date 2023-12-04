import { useLocation } from 'react-router-dom';
import { useTimerCalculator } from '../@/components/hooks/useTimerCalculator';
import { TimerDisplay } from '../@/components/meetingTimer/TimeDisplay';
import { ControlButtons } from '../@/components/meetingTimer/ControlButtons';
import { MoneyDisplay } from '../@/components/meetingTimer/MoneyDisplay';
import { BackButton } from '../@/components/meetingTimer/BackButton';
// import { useEffect, useState } from 'react';

export const MeetingTimer = () => {
    // const [backgroundFillPercentage, setBackgroundFillPercentage] = useState(0);
    // const [timerCount, setTimerCount] = useState(0);

    const location = useLocation();
    const formData = location.state?.formData;

    const {
        costTracker,
        time,
        timerOn,
        handleStart,
        handlePauseResume,
        handleReset,
    } = useTimerCalculator({
        formData,
    });

    // useEffect(() => {
    //     if (timerOn) {
    //         const intervalId = setInterval(() => {
    //             setTimerCount((prev) => {
    //                 const nextCount = prev + 1;
    //                 if (nextCount !== 0 && nextCount % 9 === 0) {
    //                     setBackgroundFillPercentage((prevPercentage) =>
    //                         prevPercentage < 100 ? prevPercentage + 1 : 100
    //                     );
    //                 }
    //                 return nextCount;
    //             });
    //         }, 1000);
    //         return () => clearInterval(intervalId);
    //     } else {
    //         setTimerCount(0);
    //         if (time === 0) {
    //             setBackgroundFillPercentage(0);
    //         }
    //     }
    // }, [timerOn, time]);

    const fontStyle =
        'text-[3rem] md:text-[4rm] lg:text-[6rem] xl:text-[8rem] 2xl:text-[9rem] font-extrabold text-center tracking-tight ';

    return (
        <main
            className={`grid h-[calc(100svh)] w-full select-none grid-rows-[6fr_6fr_1fr] gap-0 bg-gradient-to-tr from-sky-200 via-accent to-sky-100 p-4 duration-1000 animate-in fade-in md:h-[100dvh]`}
        >
            {/* Money Card*/}
            <div
                className={`relative flex h-full w-full flex-col items-center justify-center`}
            >
                <div className="grid h-full max-h-[60px] w-full grid-cols-[60px_1fr] grid-rows-1 lg:grid-cols-[100px_1fr]">
                    <BackButton />
                    <div className=" border-radius-custom relative -z-0 col-span-1 row-span-1 h-full w-full rounded-t-xl bg-primary before:-left-4 before:bottom-0 " />
                </div>
                <MoneyDisplay
                    costOfMeeting={costTracker}
                    className={`relative -mt-0.5 flex h-full w-full basis-4/5 items-center justify-center rounded-xl rounded-tr-none pb-[40px] text-secondary ${fontStyle} bg-primary `}
                    // opacity-[${backgroundFillPercentage}%]
                />
            </div>

            {/* Time Card */}
            <TimerDisplay
                time={time}
                className={`relative flex h-full w-full flex-1 flex-col items-center justify-center rounded-xl bg-secondary text-primary ${fontStyle}`}
            />

            <div className="relative mt-1 flex h-full w-full items-center justify-center ">
                <ControlButtons
                    timerOn={timerOn}
                    time={time}
                    handleStart={handleStart}
                    handlePauseResume={handlePauseResume}
                    handleReset={handleReset}
                />
            </div>
        </main>
    );
};
