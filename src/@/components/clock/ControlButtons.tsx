interface ControlButtonsProps {
    timerOn: boolean;
    time: number;
    handleStart: () => void;
    handlePauseResume: () => void;
    handleStop: () => void;
}

export const ControlButtons = ({
    timerOn,
    time,
    handleStart,
    handlePauseResume,
    handleStop,
}: ControlButtonsProps) => {
    return (
        <div>
            {!timerOn && (
                <button
                    onClick={time === 0 ? handleStart : handlePauseResume}
                    className={`rounded px-4 py-2 text-white ${
                        time === 0 ? 'bg-green-500' : 'bg-blue-500'
                    }`}
                >
                    {time === 0 ? 'Start' : 'Resume'}
                </button>
            )}
            {timerOn && (
                <button
                    onClick={handlePauseResume}
                    className="rounded bg-yellow-500 px-4 py-2 text-white"
                >
                    Pause
                </button>
            )}
            {!timerOn && time > 0 && (
                <button
                    onClick={handleStop}
                    className="ml-2 rounded bg-red-500 px-4 py-2 text-white"
                >
                    Stop
                </button>
            )}
        </div>
    );
};
