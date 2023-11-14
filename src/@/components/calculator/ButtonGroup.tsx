import DigitButton from './DigitButton';
import { ACTIONS, Action } from './types/types';
import OperationButton from './OperationButton';
import { Button } from '../ui/button';

interface ButtonGroupProps {
    dispatch: React.Dispatch<Action>;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ dispatch }) => {
    return (
        <>
            <Button
                className="col-span-2 w-full"
                onClick={() => dispatch({ type: ACTIONS.CLEAR })}
            >
                AC
            </Button>
            <Button
                size="icon"
                onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
            >
                DEL
            </Button>
            <OperationButton operation="÷" dispatch={dispatch} />
            <DigitButton digit="1" dispatch={dispatch} />
            <DigitButton digit="2" dispatch={dispatch} />
            <DigitButton digit="3" dispatch={dispatch} />
            <OperationButton operation="x" dispatch={dispatch} />
            <DigitButton digit="4" dispatch={dispatch} />
            <DigitButton digit="5" dispatch={dispatch} />
            <DigitButton digit="6" dispatch={dispatch} />
            <OperationButton operation="+" dispatch={dispatch} />
            <DigitButton digit="7" dispatch={dispatch} />
            <DigitButton digit="8" dispatch={dispatch} />
            <DigitButton digit="9" dispatch={dispatch} />
            <OperationButton operation="-" dispatch={dispatch} />
            <DigitButton digit="." dispatch={dispatch} />
            <DigitButton digit="0" dispatch={dispatch} />
            <Button
                className="col-span-2 w-full"
                onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
            >
                =
            </Button>
        </>
    );
};
