export interface Action {
    type: string;
    payload?: {
        digit?: string;
        operation?: string;
    };
}

// Define the shape of our calculator's state and actions
export interface State {
    currentOperand: string | null;
    previousOperand: string | null;
    operation: string | null;
    overwrite: boolean;
}

//calculator actions as objects
export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    EVALUATE: 'evaluate',
};
