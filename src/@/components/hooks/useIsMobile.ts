import { useEffect, useState } from 'react';

export function useIsMobile() {
    const [screenMobile, setScreenMobile] = useState(true);

    useEffect(() => {
        if (window.innerWidth > 768) {
            setScreenMobile(false);
        }
    }, [screenMobile]);

    return {
        screenMobile,
    };
}
