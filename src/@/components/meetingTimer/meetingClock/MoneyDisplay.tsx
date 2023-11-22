import { useEffect, useState } from 'react';

interface MoneyDisplayProps {
    costOfMeeting: number;
    className?: string;
}

export const MoneyDisplay = ({
    costOfMeeting,
    className,
}: MoneyDisplayProps) => {
    const [triggerOpacity, setTriggerOpacity] = useState(false);

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
                ${costOfMeeting.toFixed(2)}
            </div>
            <div
                className={`absolute bottom-10 right-4 flex -rotate-90 text-lg tracking-wide delay-500 duration-300 lg:bottom-16 ${
                    triggerOpacity ? 'opacity-100' : 'opacity-0'
                }`}
            >
                cost
            </div>
        </div>
    );
};
