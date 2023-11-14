import { useReducer } from 'react';
import { reducer } from './utils/reducer';
import { Action, State } from './types/types';
import { ButtonGroup } from './ButtonGroup';
import { Display } from './Display';

export const MainCalculator: React.FC = () => {
    const initialState: State = {
        currentOperand: null,
        previousOperand: null,
        operation: null,
        overwrite: false,
    };

    const [{ currentOperand, previousOperand, operation }, dispatch] =
        useReducer<React.Reducer<State, Action>>(reducer, initialState);

    return (
        <div className="grid-rows-7 mt-8 grid w-64 grid-cols-4 justify-center gap-1 p-2">
            <Display
                currentOperand={currentOperand}
                previousOperand={previousOperand}
                operation={operation}
            />
            <ButtonGroup dispatch={dispatch} />
        </div>
    );
};
