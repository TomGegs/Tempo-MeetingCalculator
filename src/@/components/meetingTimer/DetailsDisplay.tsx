import { useEffect, useState, useRef } from 'react';
import { ScrollArea, ScrollBar } from '../shadcnUI/scroll-area';

interface DetailsDisplayProps {
    tenMinBlock: number;
    maxDuration: number;
    currentTime: number;
    isTimerRunning: boolean;
    resetAnimation: number;
}

export const DetailsDisplay = ({
    tenMinBlock,
    maxDuration,
    currentTime,
    isTimerRunning,
    resetAnimation,
}: DetailsDisplayProps) => {
    const [displayBlocks, setDisplayBlocks] = useState<
        {
            cost: number;
            label: string;
            animationDelay: string;
            animationDuration: string;
        }[]
    >([]);
    const latestBlockRef = useRef(null);

    useEffect(() => {
        const newBlocks = [];
        const blockIncrement = 10; // Increment in minutes
        const animationDurationInSeconds = 600; // 10 minutes in seconds

        // Determine the maximum duration to consider for block generation
        let currentMaxDuration = Math.max(
            maxDuration,
            Math.ceil(currentTime / 600) * 10
        );
        currentMaxDuration = Math.min(currentMaxDuration, 240); // Cap at 240 minutes

        for (
            let i = blockIncrement;
            i <= currentMaxDuration;
            i += blockIncrement
        ) {
            const delayTimeInSeconds =
                (i / blockIncrement - 1) * animationDurationInSeconds;

            newBlocks.push({
                cost: tenMinBlock * (i / blockIncrement),
                label: `${i}m`,
                animationDuration: `${animationDurationInSeconds}s`,
                animationDelay: `${delayTimeInSeconds}s`,
            });
        }

        setDisplayBlocks(newBlocks);
    }, [maxDuration, tenMinBlock, currentTime, resetAnimation]);

    useEffect(() => {
        if (latestBlockRef.current) {
            (latestBlockRef.current as HTMLElement)?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'end',
            });
        }
    }, [displayBlocks]);

    return (
        <div
            key={resetAnimation}
            className="relative flex h-full w-full flex-col"
        >
            <ScrollArea className="h-full w-full">
                <div className="flex h-full w-full flex-row items-center justify-between gap-x-2 overflow-hidden">
                    {displayBlocks.map(
                        (
                            { cost, label, animationDuration, animationDelay },
                            index
                        ) => (
                            <div
                                key={index}
                                ref={
                                    index === displayBlocks.length - 1
                                        ? latestBlockRef
                                        : null
                                }
                                className="relative flex h-full w-full min-w-[48px] flex-col justify-center rounded-xl bg-primary p-2 text-center lg:p-10"
                            >
                                <div
                                    className={`absolute bottom-0 left-0 h-full w-full animate-fill-estimation-box rounded-xl bg-primary fill-mode-forwards`}
                                    style={{
                                        animationDuration,
                                        animationDelay,
                                        animationPlayState: isTimerRunning
                                            ? 'running'
                                            : 'paused',
                                    }}
                                />
                                <div
                                    className="z-10 flex h-full w-full animate-text-estimation-box flex-col items-center justify-start text-sm font-semibold tracking-tight text-secondary fill-mode-forwards lg:text-2xl"
                                    style={{
                                        animationDuration,
                                        animationDelay,
                                        animationPlayState: isTimerRunning
                                            ? 'running'
                                            : 'paused',
                                    }}
                                >
                                    <span>{label}</span>
                                    <span>${Number(cost).toFixed(0)}</span>
                                </div>
                            </div>
                        )
                    )}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    );
};
