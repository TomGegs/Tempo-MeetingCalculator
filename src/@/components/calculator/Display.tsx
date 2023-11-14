interface DisplayProps {
    currentOperand: string | null;
    previousOperand: string | null;
    operation: string | null;
}

export const Display: React.FC<DisplayProps> = ({
    currentOperand,
    previousOperand,
    operation,
}) => {
    const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
        maximumFractionDigits: 0,
    });

    function formatOperand(operand: string | null): string {
        if (operand == null) return '';
        const [integer, decimal] = operand.split('.');
        if (decimal == null) return INTEGER_FORMATTER.format(Number(integer));
        return `${INTEGER_FORMATTER.format(Number(integer))}.${decimal}`;
    }
    return (
        <div className="col-start-1 col-end-[-1] flex h-64 w-full flex-col items-end justify-around break-all rounded border border-black bg-black bg-opacity-80 p-4 text-white">
            <div className="h-full text-xl text-gray-200">
                {formatOperand(previousOperand)} {operation}
            </div>
            <div className="text-gray-white h-full text-3xl">
                {formatOperand(currentOperand)}
            </div>
        </div>
    );
};
