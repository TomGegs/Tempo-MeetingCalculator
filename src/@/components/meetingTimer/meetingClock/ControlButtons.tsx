import { PlayIcon, PauseIcon, TimerReset } from 'lucide-react';
import { Button } from '../../ui/button';

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
        <div className="grid w-full grid-cols-5 grid-rows-1 gap-x-2 ">
            <div
                className={`flex w-full flex-col text-center ${
                    !timerOn && time > 0 ? 'col-span-4' : 'col-span-5'
                }`}
            >
                <Button
                    onClick={!timerOn ? handleStart : handlePauseResume}
                    variant="ghost"
                    className="w-full bg-[#252525] text-neutral-500 hover:text-primary active:text-primary"
                >
                    {!timerOn ? (
                        <PlayIcon className="h-5 w-5 " />
                    ) : (
                        <PauseIcon className="h-5 w-5 " />
                    )}
                </Button>
                <span className="mt-1 text-xs text-neutral-500">
                    {!timerOn ? 'Start' : 'Pause'}
                </span>
            </div>
            {!timerOn && time > 0 && (
                <div className="col-span-1 flex flex-col text-center">
                    <Button
                        onClick={handleReset}
                        variant="ghost"
                        className="w-full bg-[#252525] text-neutral-500 hover:text-primary active:text-primary"
                    >
                        <TimerReset className="h-5 w-5 " />
                    </Button>
                    <span className="mt-1 text-xs text-neutral-500">Reset</span>
                </div>
            )}
        </div>
    );
};
