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
    const [prevBlocksLength, setPrevBlocksLength] = useState(0); // Track array length to trigger auto-scrolling
    const latestBlockRef = useRef(null); // Ref to the newly generated block

    useEffect(() => {
        const newBlocks = [];
        const blockIncrement = 10;
        const animationDuration = blockIncrement; // Each block's animation duration in seconds

        let currentMaxDuration = Math.max(
            maxDuration,
            currentTime + blockIncrement
        );
        // Update currentMaxDuration if currentTime exceeds it
        if (currentTime / 60 > maxDuration) {
            currentMaxDuration = Math.ceil(currentTime / 600) * 10;
        }

        for (
            let i = blockIncrement;
            i <= currentMaxDuration;
            i += blockIncrement
        ) {
            // Calculate the delay for each block
            // The first block starts immediately (0s delay), and each subsequent block
            // starts after the previous block's animation has completed

            let delayTime = 0;
            if (i <= maxDuration) {
                delayTime = (i / blockIncrement - 1) * animationDuration;
            }
            //create the array of blocks
            newBlocks.push({
                cost: tenMinBlock * (i / blockIncrement),
                label: `${i}m`,
                animationDuration: `${animationDuration}s`,
                animationDelay: `${delayTime}s`,
            });
        }

        // Update the displayBlocks array
        setDisplayBlocks(newBlocks);
        // Change the previous length of the displayBlocks array to trigger auto-scrolling
        setPrevBlocksLength(displayBlocks.length);
    }, [maxDuration, tenMinBlock, currentTime]);

    // Auto-scroll to the latest block
    useEffect(() => {
        if (latestBlockRef.current && displayBlocks.length > prevBlocksLength) {
            (latestBlockRef.current as HTMLElement)?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'end',
            });
        }
    }, [displayBlocks, prevBlocksLength]);

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
                                className="relative flex h-full w-full min-w-[48px]  flex-col justify-center rounded-xl bg-primary p-2 text-center lg:p-10"
                            >
                                <div
                                    className={`absolute bottom-0 left-0 h-full w-full animate-fill-estimation-box rounded-xl  bg-primary fill-mode-forwards`}
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
