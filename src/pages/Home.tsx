import { useContext, useState } from 'react';

import { FormWrapper } from '@/@/components/FormWrapper';
// import { LogoAnimation } from '@/@/ui/LogoAnimation';

import { useIsMobile } from '@/@/components/hooks/useIsMobile';

import { Button } from '@/@/components/shadcnUI/button';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/@/components/shadcnUI/sheet';
import HoverContext from '@/@/components/utils/hoverContext';
import boltIcon from '@/assets/Icon.svg';
import boltIconInverted from '@/assets/IconInverted.svg';

export function Home() {
    const [loading, setLoading] = useState<boolean>(false);
    const { isHovered, setIsHovered } = useContext(HoverContext);

    const { screenMobile } = useIsMobile();

    return (
        <main
            className={`flex w-full flex-col items-center justify-center transition-colors duration-1000 md:p-4  lg:p-10 ${
                loading
                    ? 'bg-gradient-to-tr from-sky-200 via-accent  to-sky-100 duration-1000 animate-out fade-out'
                    : 'bg-transparent'
            }`}
        >
            {/* <div className='h-64'>
                    <LogoAnimation />
                </div> */}
            <div className="relative z-10 flex h-full w-full -translate-y-8 flex-col items-center justify-center overflow-hidden p-10 text-center text-white opacity-0 delay-1000 duration-200 animate-out fade-in-100 fill-mode-forwards lg:h-fit lg:max-w-[600px]">
                <div className="flex flex-col justify-center gap-y-6 p-16 lg:p-32">
                    <div className="flex flex-row">
                        <div className="relative h-12 w-12 lg:h-24 lg:w-24">
                            <img
                                src={boltIcon}
                                alt="Lightning bolt"
                                className="absolute inset-0 h-full w-full object-contain transition-opacity duration-1000"
                                style={{ opacity: isHovered ? 0 : 1 }}
                            />
                            <img
                                src={boltIconInverted}
                                alt="Inverted Lightning bolt"
                                className="absolute inset-0 h-full w-full object-contain transition-opacity duration-1000"
                                style={{ opacity: isHovered ? 1 : 0 }}
                            />
                        </div>
                        <h1
                            className={`text-5xl font-semibold italic transition-all duration-1000 lg:text-8xl ${
                                isHovered
                                    ? 'text-secondary drop-shadow-purpleGlow'
                                    : 'drop-shadow-blueGlow text-white'
                            }  `}
                        >
                            TEMPO
                        </h1>
                    </div>
                    <p className="text-sm lg:text-lg">
                        Fast meetings, better outcomes.
                    </p>
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <div className="h-fit w-full translate-y-8 opacity-0 delay-1000 duration-200 animate-out fade-in-100 fill-mode-forwards">
                            <Button
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                variant="outline"
                                className="mx-auto flex w-fit items-center rounded-xl border border-purple-400 bg-primary px-6 py-8 text-xl text-secondary shadow-sm shadow-[white] transition-all duration-200 hover:bg-purple-500 hover:text-white  active:-translate-y-0.5 active:scale-[0.99] lg:w-[80%] lg:py-10"
                            >
                                <span className="mr-2 hidden lg:block">
                                    Get Going
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6 "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </Button>
                        </div>
                    </SheetTrigger>
                    <SheetContent
                        side="top"
                        className="mx-auto flex h-full w-full items-center justify-center border-0 bg-transparent"
                    >
                        <FormWrapper
                            screenMobile={screenMobile}
                            setLoading={setLoading}
                            loading={loading}
                        />
                    </SheetContent>
                </Sheet>
            </div>
        </main>
    );
}

export default Home;
