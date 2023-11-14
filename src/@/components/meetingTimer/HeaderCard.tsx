import { Typography } from '../ui/typography';
import logo from '../../../assets/logo.png';
import { useEffect, useState } from 'react';

type HeaderCardProps = {
    isSheetVisible: boolean;
};

export const HeaderCard = ({ isSheetVisible }: HeaderCardProps) => {
    const [triggerOpacity, setTriggerOpacity] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTriggerOpacity(true);
        }, 1000);
    }, [triggerOpacity]);

    return (
        <div
            className={`mx-auto my-auto flex flex-col px-2 duration-500 ease-in-out ${
                isSheetVisible
                    ? '-translate-y-[30dvh] md:-translate-y-[20dvh]'
                    : 'translate-y-0'
            }`}
        >
            <Typography
                variant="h1"
                as="h1"
                className={`flex w-fit flex-row items-center text-[2.5rem] text-white duration-300 ${
                    triggerOpacity ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <span className="delay-300 duration-500 animate-in fade-in-0 slide-in-from-left ">
                    econo
                </span>
                <img
                    src={logo}
                    alt="economeetLogo"
                    className={`-mx-2.5 mt-2 h-6 w-10 rotate-90 transition-opacity delay-300 duration-300 ${
                        triggerOpacity ? 'opacity-100' : 'opacity-0'
                    }`}
                />
                <span className="text-purple-600 delay-300 duration-500 animate-in fade-in-0 slide-in-from-right ">
                    meet
                </span>
            </Typography>
        </div>
    );
};
