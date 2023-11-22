import { useEffect, useState } from 'react';

interface TimerDisplayProps {
    time: number;
    className: string;
}

export const TimerDisplay = ({ time, className }: TimerDisplayProps) => {
    const [triggerOpacity, setTriggerOpacity] = useState(false);

    const formatTime = (time: number) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        const formattedHours = hours > 0 ? `${hours}:` : '';
        const formattedMinutes =
            minutes > 0 || hours > 0
                ? `${hours > 0 && minutes < 10 ? '0' : ''}${minutes}:`
                : '';
        const formattedSeconds = `${
            minutes > 0 && seconds < 10 ? '0' : ''
        }${seconds}`;

        return `${formattedHours}${formattedMinutes}${formattedSeconds}`;
    };

    useEffect(() => {
        setTimeout(() => {
            setTriggerOpacity(true);
        }, 1000);
    }, [triggerOpacity]);

    return (
        <div className={className}>
            <div
                className={`duration-300 ${
                    triggerOpacity ? 'opacity-100' : 'opacity-0'
                }`}
            >
                {formatTime(time)}
            </div>
            <div
                className={`absolute bottom-8 right-4 flex -rotate-90 text-lg tracking-wide delay-500 duration-300 ${
                    triggerOpacity ? 'opacity-100' : 'opacity-0'
                }`}
            >
                time
            </div>
        </div>
    );
};
