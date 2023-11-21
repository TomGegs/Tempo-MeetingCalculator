type FinishedTimeProps = {
    laps: number[];
};

export const FinishedTime = ({ laps }: FinishedTimeProps) => {
    const formatTime = (time: number) =>
        new Date(time * 1000).toISOString().substr(11, 8);
    return (
        <div>
            {laps.map((lap) => (
                <div key={lap}>{formatTime(lap)}</div>
            ))}
        </div>
    );
};
