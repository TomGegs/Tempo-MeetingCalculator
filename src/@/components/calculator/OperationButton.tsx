import { Button } from '../ui/button';
import { ACTIONS, Action } from './types/types';

interface OperationButtonProps {
    dispatch: React.Dispatch<Action>;
    operation: string;
}

const OperationButton: React.FC<OperationButtonProps> = ({
    dispatch,
    operation,
}) => {
    return (
        <Button
            size="icon"
            className=""
            onClick={() =>
                dispatch({
                    type: ACTIONS.CHOOSE_OPERATION,
                    payload: { operation },
                })
            }
        >
            {operation}
        </Button>
    );
};

export default OperationButton;
