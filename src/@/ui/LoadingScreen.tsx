const LoadingScreen = () => {
    const letters = ['T', 'E', 'M', 'P', 'O'];

    // const [letterOpacity, setLetterOpacity] = useState(false);
    // const [letterLine, setLetterLine] = useState(false);
    // const [letterBlock, setLetterBlock] = useState(false);

    //* ------------------------------------------------------------------------ *//
    // States are shuffled for a unique "decode" effect each time.
    // * ------------------------------------------------------------------------ */

    // const textAnimation = `before:content-none before:w-fit before:bg-black before:text-black before:absolute before:top-[50%] before:left-[50%] before:w-0 before:h-[1.1rem] before:translate-x-[-50%] before:translate-y-[-55%] relative uppercase h-fit relative  ${
    //     letterLine ? 'before:w-[10px]' : ''
    // } ${letterBlock ? 'before:w-[0.9rem]' : ''} ${
    //     letterOpacity ? 'opacity-100' : 'opacity-0'
    // }`;

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLetterOpacity(true);
    //         setLetterLine(true);
    //     }, 400);
    //     setTimeout(() => {
    //         setLetterLine(false);
    //         setLetterBlock(true);
    //     }, 800);
    //     setTimeout(() => {
    //         setLetterBlock(false);
    //     }, 1200);
    // }, []);

    return (
        <main className="grid h-[100vh] w-full grid-rows-3 bg-red-200 md:h-screen">
            <div className="relative col-span-2 row-span-1 flex h-full w-full justify-center bg-purple-500 text-[5rem]">
                {letters.map((letter, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center uppercase"
                        style={{ animationDelay: `${index * 0.5}s` }}
                    >
                        <div className="animate-line-to-box absolute inset-0 z-10" />
                        <span className="animate-fade-in absolute inset-0 z-20 opacity-0">
                            {letter}
                        </span>
                    </div>
                ))}
            </div>
            <div className="col-start-2 row-start-2 flex h-full w-full bg-yellow-200">
                <span>Make meetings matter</span>
                <span>Meet to do</span>
                <span>Faster, cheaper, happier</span>
            </div>
            <div className="col-span-2 row-start-3 flex w-full content-end items-end justify-end bg-blue-200 text-end">
                <span className="my-2 flex w-full border-t border-black ">
                    Powered by T.Gegs
                </span>
            </div>
        </main>
    );
};

export default LoadingScreen;
