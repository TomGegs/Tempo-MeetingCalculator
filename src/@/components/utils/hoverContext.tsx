import { createContext } from 'react';

const HoverContext = createContext({
    isHovered: false,
    setIsHovered: (isHovered: boolean) => {},
});

export default HoverContext;
