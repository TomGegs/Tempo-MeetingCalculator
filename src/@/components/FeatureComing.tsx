export const FeatureComing = () => {
    return (
        <div className="absolute  left-1/2 top-1/2 flex w-[80%] -translate-x-1/2 flex-col rounded-lg p-4 text-center text-primary md:w-full ">
            <div className="relative z-10 flex h-full w-full select-none flex-col rounded-lg border border-violet-950/20 bg-black bg-opacity-10 p-4 text-center text-primary shadow-md drop-shadow-lg backdrop-blur-sm ">
                <span className="animate-gradient bg-primary bg-gradient-to-tr from-primary via-secondary to-primary bg-[length:30px_100%] bg-clip-text bg-no-repeat text-[1.5rem] font-semibold uppercase italic text-transparent md:bg-[length:100px_100%]  ">
                    Oh! There's more?
                </span>
                <span className="font-slim text-sm text-black">
                    Coming soon: Enter each participant's details for accurate
                    meeting cost calculations
                </span>
            </div>
        </div>
    );
};
