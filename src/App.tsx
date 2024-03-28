import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { MeetingTimer } from './pages/MeetingTimer';
import HoverContext from './@/components/utils/hoverContext';
import { BackgroundWrapper } from './@/ui/BackgroundWrapper';
import { useMemo, useState } from 'react';

const App = () => {
    const [isHovered, setIsHovered] = useState(false);
    const hoverValue = useMemo(
        () => ({ isHovered, setIsHovered }),
        [isHovered, setIsHovered]
    );

    return (
        <BackgroundWrapper>
            <Routes>
                <Route
                    path="/"
                    element={
                        <HoverContext.Provider value={hoverValue}>
                            <Home />
                        </HoverContext.Provider>
                    }
                />

                <Route path="/timer" element={<MeetingTimer />} />
            </Routes>
        </BackgroundWrapper>
    );
};

export default App;
