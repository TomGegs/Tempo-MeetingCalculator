import { Typography } from '../../ui/typography';

interface MoneyDisplayProps {
    costOfMeeting: number;
}

export const MoneyDisplay: React.FC<MoneyDisplayProps> = ({
    costOfMeeting,
}) => {
    return (
        <div className="font text-2xl ">
            <Typography variant="h1" as="h2" className="text-white">
                ${costOfMeeting.toFixed(2)} {/* Display formatted cost */}
            </Typography>
        </div>
    );
};
