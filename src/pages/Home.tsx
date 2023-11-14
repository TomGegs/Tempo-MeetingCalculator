import { HeaderCard } from '@/@/components/meetingTimer/HeaderCard';
import { Layout } from '@/@/components/meetingTimer/Layout';
import { Button } from '@/@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/@/components/ui/dialog';
import { Sheet, SheetContent, SheetTrigger } from '@/@/components/ui/sheet';
import { useEffect, useState } from 'react';

export function Home() {
    const [screenMobile, setScreenMobile] = useState(true);
    const [isSheetVisible, setIsSheetVisible] = useState(false);

    const handleSheetVisibility = (open: boolean) => {
        setIsSheetVisible(open);
    };

    useEffect(() => {
        if (window.innerWidth > 768) {
            setScreenMobile(false);
        }
    }, [screenMobile]);

    return (
        <main className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-t from-[#1e1e1e] to-[#191919] p-10 md:p-4">
            <HeaderCard isSheetVisible={isSheetVisible} />
            {screenMobile ? (
                <Sheet onOpenChange={handleSheetVisibility}>
                    <SheetTrigger asChild>
                        <Button
                            variant="secondary"
                            className="delay-1.5s mx-auto mb-10 flex w-full translate-y-8 opacity-0 duration-200 animate-out fade-in-100 fill-mode-forwards"
                        >
                            Begin
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side="bottom"
                        className="mx-auto flex h-[90%] w-full justify-center rounded-t-3xl bg-secondary "
                    >
                        <Layout />
                    </SheetContent>
                </Sheet>
            ) : (
                <Dialog onOpenChange={handleSheetVisibility}>
                    <DialogTrigger asChild>
                        <Button
                            variant="secondary"
                            className="delay-1.5s mx-auto mb-10 flex w-[25%] opacity-0 duration-200 animate-out fade-in-100 fill-mode-forwards"
                        >
                            Begin
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[600px]">
                        <Layout />
                    </DialogContent>
                </Dialog>
            )}
            <div className="absolute" />
        </main>
    );
}

export default Home;

// bg-[#2A52BE] - cerulean blue
