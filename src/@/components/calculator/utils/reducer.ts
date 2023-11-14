import { ACTIONS, Action, State } from '../types/types';
import { evaluate } from './evaluate';

//calculator logic to enable buttons to add digits to the calculator
export function reducer(state: State, { type, payload }: Action): State {
    switch (type) {
        case ACTIONS.ADD_DIGIT:
            if (state.overwrite) {
                return {
                    ...state,
                    currentOperand: payload?.digit ?? null,
                    overwrite: false,
                };
            }

            if (payload?.digit === '0' && state.currentOperand === '0') {
                return state;
            }

            if (payload?.digit === '.' && state.currentOperand?.includes('.')) {
                return state;
            }

            return {
                ...state,
                currentOperand: `${
                    state.currentOperand || ''
                }${payload?.digit}`,
            };

        case ACTIONS.CHOOSE_OPERATION:
            if (state.currentOperand == null && state.previousOperand == null) {
                return state;
            }

            if (state.currentOperand == null) {
                return {
                    ...state,
                    operation: payload?.operation ?? null,
                };
            }

            if (state.previousOperand == null) {
                return {
                    ...state,
                    operation: payload?.operation ?? null,
                    previousOperand: state.currentOperand,
                    currentOperand: null,
                };
            }

            return {
                ...state,
                previousOperand: evaluate(state),
                operation: payload?.operation ?? null,
                currentOperand: null,
            };

        case ACTIONS.CLEAR:
            return {
                currentOperand: null,
                previousOperand: null,
                operation: null,
                overwrite: false,
            };

        case ACTIONS.DELETE_DIGIT:
            if (state.overwrite) {
                return {
                    ...state,
                    overwrite: false,
                    currentOperand: null,
                };
            }

            if (state.currentOperand == null) {
                return state;
            }

            if (state.currentOperand.length === 1) {
                return {
                    ...state,
                    currentOperand: null,
                };
            }

            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1),
            };
        case ACTIONS.EVALUATE:
            if (
                state.operation == null ||
                state.currentOperand == null ||
                state.previousOperand == null
            ) {
                return state;
            }
            return {
                ...state,
                overwrite: true,
                previousOperand: null,
                currentOperand: evaluate(state),
                operation: null,
            };
        default:
            return state;
    }
}
