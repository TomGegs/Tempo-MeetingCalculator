import { HeroTitle } from '@/@/components/HeroTitle';
import { FormWrapper } from '@/@/components/FormWrapper';
import { Button } from '@/@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/@/components/ui/dialog';
import { Sheet, SheetContent, SheetTrigger } from '@/@/components/ui/sheet';
import { useEffect, useState } from 'react';

export function Home() {
    const [screenMobile, setScreenMobile] = useState(true);
    const [isSheetVisible, setIsSheetVisible] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSheetVisibility = (open: boolean) => {
        setIsSheetVisible(open);
    };

    useEffect(() => {
        if (window.innerWidth > 768) {
            setScreenMobile(false);
        }
    }, [screenMobile]);

    return (
        <main
            className={`flex h-screen w-full flex-col items-center justify-center p-10 transition-colors  duration-1000 md:p-4 ${
                loading
                    ? 'bg-gradient-to-tr from-sky-200 via-accent  to-sky-100 duration-1000 animate-out fade-out'
                    : 'bg-gradient-to-tr from-[#1e1e1e] to-[#191919]'
            }`}
        >
            <HeroTitle isSheetVisible={isSheetVisible} />
            {screenMobile ? (
                <Sheet onOpenChange={handleSheetVisibility}>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            className="mx-auto mb-10 flex w-full translate-y-8 opacity-0 duration-200 animate-out fade-in-100 delay-1.5s fill-mode-forwards"
                        >
                            Get started
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side="bottom"
                        className="h-full w-full bg-transparent"
                    >
                        <FormWrapper
                            setLoading={setLoading}
                            loading={loading}
                        />
                    </SheetContent>
                </Sheet>
            ) : (
                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            variant="outline"
                            className="mx-auto mb-10 flex w-[25%] opacity-0 duration-200 animate-out fade-in-100 delay-1.5s fill-mode-forwards"
                        >
                            Begin
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[600px]">
                        <FormWrapper
                            setLoading={setLoading}
                            loading={loading}
                        />
                    </DialogContent>
                </Dialog>
            )}
            <div className="absolute" />
        </main>
    );
}

export default Home;
