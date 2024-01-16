import { useEffect, useState } from 'react';

interface TimerDisplayProps {
    time: number;
    className: string;
}

export const TimerDisplay = ({ time, className }: TimerDisplayProps) => {
    const [triggerOpacity, setTriggerOpacity] = useState(false);

    const formatTime = (time: number) => {
        const wholeSeconds = Math.floor(time);
        const hours = Math.floor(wholeSeconds / 3600);
        const minutes = Math.floor((wholeSeconds % 3600) / 60);
        const seconds = wholeSeconds % 60;

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
                className={`w-full duration-300 ${
                    triggerOpacity ? 'opacity-100' : 'opacity-0'
                }`}
            >
                {formatTime(time)}
            </div>
            <div
                className={`left-50% absolute bottom-8 flex text-2xl tracking-wide delay-500 duration-300 ${
                    triggerOpacity ? 'opacity-100' : 'opacity-0'
                }`}
            >
                time
            </div>
        </div>
    );
};
