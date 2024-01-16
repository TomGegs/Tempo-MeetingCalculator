import { useEffect, useRef, useState } from 'react';

interface BackgroundWrapperProps {
    children: React.ReactNode;
}

export const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
    const [tempoCount, setTempoCount] = useState({
        horizontal: 0,
        vertical: 0,
    });

    const tempoRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (tempoRef.current) {
                const tempoDimensions = (
                    tempoRef.current as HTMLSpanElement
                ).getBoundingClientRect();
                if (tempoDimensions.width && tempoDimensions.height) {
                    const newHalfTempo = {
                        width: tempoDimensions.width / 2,
                        height: tempoDimensions.height / 2,
                    };
                    setTempoCount({
                        horizontal:
                            Math.floor(window.innerWidth / newHalfTempo.width) +
                            2,
                        vertical:
                            Math.floor(
                                window.innerHeight / newHalfTempo.height
                            ) + 2,
                    });
                }
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const rows = Array.from(
        { length: Math.max(0, tempoCount.vertical) },
        (_, i) => (
            <div
                key={i}
                className={`flex ${
                    i % 2 === 1 ? 'animate-scroll-left' : 'animate-scroll-right'
                }`}
            >
                {Array.from(
                    { length: Math.max(0, tempoCount.horizontal) },
                    (_, j) => (
                        <span
                            key={`${i}-${j}`}
                            className={`whitespace-nowrap px-1 text-center ${
                                j % Math.floor(Math.random() * 3) // frequency of blue tempo text
                                    ? 'text-cyan-500'
                                    : 'text-white'
                            } `}
                        >
                            tempo {''}
                        </span>
                    )
                )}
            </div>
        )
    );

    return (
        <div className="relative flex h-[100svh] w-full overflow-clip bg-black md:h-screen">
            <div
                aria-hidden="true"
                className="absolute inset-0 m-[-25%] flex -rotate-12 select-none flex-wrap justify-center gap-x-2 whitespace-nowrap font-semibold leading-loose text-white "
            >
                {rows}
            </div>
            <span
                ref={tempoRef}
                className="absolute whitespace-nowrap text-transparent opacity-0 "
            >
                tempo {''}
            </span>
            {children}
        </div>
    );
};
