import { PlayIcon, PauseIcon, TimerReset, Undo2 } from 'lucide-react';
import { Button } from '../../ui/button';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    function handleBackButton() {
        navigate('/');
    }

    return (
        <div className="grid grid-cols-5 gap-x-2">
            <div className="col-span-1 flex w-full flex-col text-center text-neutral-500 hover:text-white">
                <Button
                    onClick={handleBackButton}
                    variant="ghost"
                    className="w-full bg-[#252525] hover:text-primary active:text-primary"
                >
                    <Undo2 className="h-5 w-5 " />
                </Button>
                <span className="mt-1 ">Back</span>
            </div>

            <div
                className={`flex w-full flex-col text-center ${
                    !timerOn && time > 0 ? 'col-span-3' : 'col-span-4'
                }`}
            >
                <Button
                    onClick={!timerOn ? handleStart : handlePauseResume}
                    variant="ghost"
                    className={` bg-[#252525] text-neutral-500 hover:text-primary active:text-primary ${
                        !timerOn ? 'w-full' : 'w-full'
                    }`}
                >
                    {!timerOn ? (
                        <PlayIcon className="h-5 w-5 " />
                    ) : (
                        <PauseIcon className="h-5 w-5 " />
                    )}
                </Button>
                <span className="mt-1 text-neutral-500">
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
                    <span className="mt-1 text-neutral-500">Reset</span>
                </div>
            )}
        </div>
    );
};
