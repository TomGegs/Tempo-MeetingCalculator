import { useLocation } from 'react-router-dom';
import { useTimerCalculator } from '../@/components/hooks/useTimerCalculator';
import { TimerDisplay } from '../@/components/meetingTimer/TimeDisplay';
import { ControlButtons } from '../@/components/meetingTimer/ControlButtons';
import { MoneyDisplay } from '../@/components/meetingTimer/MoneyDisplay';
import { BackButton } from '../@/components/meetingTimer/BackButton';
import { DetailsDisplay } from '@/@/components/meetingTimer/DetailsDisplay';

export const MeetingTimer = () => {
    const location = useLocation();
    const formData = location.state?.formData;

    const {
        costTracker,
        time,
        timerOn,
        handleStart,
        handlePauseResume,
        handleReset,
        tenMinBlock,
        resetAnimation,
    } = useTimerCalculator({
        formData,
    });

    const fontStyle =
        'text-[3rem] md:text-[4rm] lg:text-[6rem] xl:text-[8rem] 2xl:text-[9rem] font-extrabold text-center tracking-tight ';

    return (
        <div
            className={`grid h-[calc(100svh)] w-full select-none grid-cols-1 grid-rows-[5fr_5fr__1fr_1fr] gap-y-4 bg-black p-4 duration-1000 animate-in fade-in md:h-[100dvh]`}
        >
            {/* Money Card*/}
            <div className="relative flex h-full w-full flex-col items-center justify-center">
                <div className="grid h-full max-h-[60px] w-full grid-cols-[60px_1fr] grid-rows-1 lg:grid-cols-[100px_1fr]">
                    <BackButton />
                    {/* //CSS required for rounded corner  */}
                    <div className="border-radius-custom relative -z-0 col-span-1 row-span-1 h-full w-full rounded-t-xl bg-secondary before:-left-4 before:bottom-0 " />
                </div>
                <MoneyDisplay
                    costOfMeeting={costTracker}
                    className={`relative -mt-0.5 flex h-full w-full basis-4/5 items-center justify-center rounded-xl rounded-tr-none pb-[40px] text-primary ${fontStyle} bg-secondary `}
                />
            </div>

            {/* Time Card */}
            <TimerDisplay
                time={time}
                className={`relative flex h-full w-full flex-col items-center justify-center rounded-xl bg-primary text-secondary ${fontStyle}`}
            />
            <div className="relative flex h-full w-full items-center justify-center ">
                {/* Details Card */}
                <DetailsDisplay
                    tenMinBlock={tenMinBlock}
                    maxDuration={formData?.maxDuration || 60}
                    currentTime={time}
                    isTimerRunning={timerOn}
                    resetAnimation={resetAnimation}
                />
            </div>
            <div className="relative flex h-full w-full items-center justify-center ">
                <ControlButtons
                    timerOn={timerOn}
                    time={time}
                    handleStart={handleStart}
                    handlePauseResume={handlePauseResume}
                    handleReset={handleReset}
                />
            </div>
        </div>
    );
};
