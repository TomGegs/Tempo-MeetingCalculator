import { useState } from 'react';

import { FormWrapper } from '@/@/components/FormWrapper';
import { BackgroundWrapper } from '@/@/ui/BackgroundWrapper';
import { LogoAnimation } from '@/@/ui/LogoAnimation';

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
                <div className='h-64'>
                    <LogoAnimation />
                </div>

                {screenMobile ? (
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                className="mx-auto mb-10 flex w-full translate-y-8 border-purple-400 bg-purple-500 text-white opacity-0 shadow-sm shadow-[cyan] ring duration-200  animate-out fade-in-100 delay-1.5s fill-mode-forwards"
                            >
                                Get started
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="bottom"
                            className="h-full w-full bg-transparent"
                        >
                            <FormWrapper
                                screenMobile={screenMobile}
                                setLoading={setLoading}
                                loading={loading}
                            />
                        </SheetContent>
                    </Sheet>
                ) : (
                    <FormWrapper
                        screenMobile={screenMobile}
                        setLoading={setLoading}
                        loading={loading}
                    />
                )}
            </main>
        </BackgroundWrapper>
    );
}

export default Home;
