import { useState } from 'react';

import { FormWrapper } from '@/@/components/FormWrapper';
import { BackgroundWrapper } from '@/@/ui/BackgroundWrapper';
// import { LogoAnimation } from '@/@/ui/LogoAnimation';

import { useIsMobile } from '@/@/components/hooks/useIsMobile';

import { Button } from '@/@/components/shadcnUI/button';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/@/components/shadcnUI/sheet';

export function Home() {
    const [loading, setLoading] = useState<boolean>(false);

    const { screenMobile } = useIsMobile();

    return (
        <BackgroundWrapper>
            <main
                className={`flex w-full flex-col items-center justify-center p-10 transition-colors duration-1000  md:p-4 ${
                    loading
                        ? 'bg-gradient-to-tr from-sky-200 via-accent  to-sky-100 duration-1000 animate-out fade-out'
                        : 'bg-transparent'
                }`}
            >
                {/* <div className='h-64'>
                    <LogoAnimation />
                </div> */}
                <div className="relative z-10 flex h-[150px] w-full -translate-y-8 flex-col items-center justify-center overflow-hidden rounded-t-xl border border-b-0 border-purple-400 bg-primary text-center text-white opacity-0 shadow-[cyan] delay-1000 duration-200 animate-out fade-in-100 fill-mode-forwards lg:w-[400px]">
                    <div className="animate-gradientDiagonal absolute left-0 top-0 h-full w-full bg-gradient-to-br from-primary via-secondary to-primary bg-[length:5px_100%] bg-no-repeat opacity-20" />

                    <h1 className="text-3xl font-black ">TEMPO</h1>
                    <p>
                        Make Meetings <span className="italic"> Fast</span>
                    </p>
                </div>

                <Sheet>
                    <SheetTrigger asChild>
                        <div className="h-fit w-full translate-y-8 opacity-0 delay-1000 duration-200 animate-out fade-in-100 fill-mode-forwards">
                            <Button
                                variant="outline"
                                className="mx-auto mb-10 flex w-full rounded-b-xl rounded-t-none border border-t-0 border-purple-400 bg-purple-500 text-white shadow-sm shadow-[cyan] transition-all active:-translate-y-0.5 active:scale-y-95 lg:w-[400px]
                                "
                            >
                                Get started
                            </Button>
                        </div>
                    </SheetTrigger>
                    <SheetContent
                        side="top"
                        className="mx-auto flex h-full w-full items-center justify-center border-0 bg-transparent "
                    >
                        <FormWrapper
                            screenMobile={screenMobile}
                            setLoading={setLoading}
                            loading={loading}
                        />
                    </SheetContent>
                </Sheet>
            </main>
        </BackgroundWrapper>
    );
}

export default Home;
