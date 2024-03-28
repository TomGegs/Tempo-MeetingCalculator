import { PlayIcon, PauseIcon, TimerReset } from 'lucide-react';
import { Button } from '../shadcnUI/button';

interface ControlButtonsProps {
    timerOn: boolean;
    time: number;
    handleStart: () => void;
    handlePauseResume: () => void;
    handleReset: () => void;
}

export const ControlButtons = ({
    timerOn,
    time,
    handleStart,
    handlePauseResume,
    handleReset,
}: ControlButtonsProps) => {
    return (
        <div className="relative flex w-full items-center  gap-x-2">
            {/* Start/Pause Button */}
            <div
                className={`flex flex-grow flex-col text-center transition-all duration-500 ${
                    !timerOn && time > 0 ? 'pr-40' : 'pr-0'
                }`}
            >
                <Button
                    onClick={!timerOn ? handleStart : handlePauseResume}
                    variant="ghost"
                    className="group w-full bg-[#252525] text-neutral-500 hover:text-primary active:text-primary md:py-12"
                >
                    {!timerOn ? (
                        <PlayIcon className="h-5 w-5 text-secondary group-hover:text-primary md:h-10 md:w-10" />
                    ) : (
                        <PauseIcon className="h-5 w-5 text-secondary group-hover:text-primary md:h-10 md:w-10" />
                    )}
                </Button>
                <span className="mt-1 text-xs text-secondary md:text-xl md:font-black">
                    {!timerOn ? 'Start' : 'Pause'}
                </span>
            </div>

            {/* Reset button with absolute positioning */}
            <div
                className={`absolute right-0 top-0 flex origin-right  flex-col transition-all duration-500 ${
                    !timerOn && time > 0
                        ? 'scale-x-100 opacity-100'
                        : 'scale-x-0 opacity-0'
                }`}
            >
                <Button
                    onClick={handleReset}
                    variant="ghost"
                    className="group bg-[#252525] px-12 text-neutral-500 hover:text-primary active:text-primary md:py-12"
                >
                    <TimerReset className="h-5 w-5 text-secondary group-hover:text-primary md:h-10 md:w-10" />
                </Button>
                <span
                    className={`mx-auto mt-1 text-xs text-secondary md:text-xl ${
                        !timerOn && time > 0 ? ' opacity-100' : ' opacity-0'
                    }`}
                >
                    Reset
                </span>
            </div>
        </div>
    );
};
