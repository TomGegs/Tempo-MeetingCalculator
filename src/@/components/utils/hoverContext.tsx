import { createContext } from 'react';

const HoverContext = createContext({
    isHovered: false,
    // @ts-expect-error TS6133
    setIsHovered: (isHovered: boolean) => {},
});

export default HoverContext;
