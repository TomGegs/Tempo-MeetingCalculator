import { useContext, useState } from 'react';

import { FormWrapper } from '@/@/components/FormWrapper';
import { LogoAnimation } from '@/@/ui/LogoAnimation';

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
            <div className="relative z-10 flex h-full w-full -translate-y-8 flex-col items-center justify-center overflow-hidden p-10 text-center text-white opacity-0 delay-1000 duration-200 animate-out fade-in-100 fill-mode-forwards lg:h-fit lg:max-w-[600px]">
                <div className="h-fit lg:h-64">
                    <LogoAnimation />
                </div>
                <div className="flex flex-col justify-center gap-y-6 pb-10 pt-8 lg:pb-16 lg:pt-32">
                    <div className="flex flex-row justify-center">
                        <h1
                            className={`text-center text-5xl font-black italic transition-all duration-1000 lg:text-8xl ${
                                isHovered
                                    ? 'text-secondary drop-shadow-purpleGlow '
                                    : 'text-white drop-shadow-blueGlow'
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
                                className="group mx-auto flex w-fit flex-row items-center justify-center rounded-3xl border border-purple-400 bg-primary px-6 py-8 text-xl text-secondary shadow-sm shadow-[white] transition-all duration-200 hover:bg-purple-500 hover:text-white  active:-translate-y-0.5 active:scale-[0.99] lg:w-[80%] lg:py-10"
                            >
                                <span className="ml-2 hidden justify-center font-black italic group-hover:animate-pulse lg:flex">
                                    Get Started{' '}
                                </span>
                                <span className="relative flex h-12 w-12 items-center self-center">
                                    <img
                                        src={boltIcon}
                                        alt="Lightning bolt"
                                        className="absolute inset-0 bottom-0 h-full w-full object-contain transition-opacity duration-200 group-hover:animate-pulse"
                                        style={{ opacity: isHovered ? 1 : 0 }}
                                    />
                                    <img
                                        src={boltIconInverted}
                                        alt="Inverted Lightning bolt"
                                        className="absolute inset-0 bottom-0 h-full w-full object-contain transition-opacity duration-200"
                                        style={{ opacity: isHovered ? 0 : 1 }}
                                    />
                                </span>
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
