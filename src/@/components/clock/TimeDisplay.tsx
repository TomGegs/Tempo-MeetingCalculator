interface TimerDisplayProps {
    time: number;
}

export const TimerDisplay: React.FC<TimerDisplayProps> = ({ time }) => {
    const formatTime = (time: number) =>
        new Date(time * 1000).toISOString().substr(11, 8);
    return <div className="font-mono text-2xl">{formatTime(time)}</div>;
};
