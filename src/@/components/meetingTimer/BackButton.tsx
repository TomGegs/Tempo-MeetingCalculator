import { Undo2 } from 'lucide-react';
import { Button } from '../shadcnUI/button';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
    const navigate = useNavigate();

    function handleBackButton() {
        navigate('/');
    }

    return (
        <Button
            onClick={handleBackButton}
            variant="ghost"
            className="group z-20 h-full max-h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-[#252525] text-neutral-500 hover:text-primary active:text-primary lg:mx-auto lg:max-h-[50px] lg:w-full lg:max-w-[80%]"
        >
            <Undo2 className="h-5 w-5  group-hover:scale-105" />
        </Button>
    );
};
