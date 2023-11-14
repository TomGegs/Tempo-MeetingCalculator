import { State } from '../types/types';

export function evaluate({
    currentOperand,
    previousOperand,
    operation,
}: State): string {
    const prev = parseFloat(previousOperand || '0');
    const current = parseFloat(currentOperand || '0');

    if (isNaN(prev) || isNaN(current)) {
        return '';
    }

    let computation: number;

    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case 'x':
            computation = prev * current;
            break;
        case '÷':
            computation = prev / current;
            break;
        default:
            return '0';
    }
    return computation.toString();
}
