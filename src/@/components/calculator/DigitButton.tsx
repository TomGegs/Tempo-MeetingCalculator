import { Button } from '../ui/button';
import { ACTIONS, Action } from './types/types';

interface DigitButtonProps {
    dispatch: React.Dispatch<Action>;
    digit: string;
}

export default function DigitButton({ dispatch, digit }: DigitButtonProps) {
    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() =>
                dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })
            }
        >
            {digit}
        </Button>
    );
}
