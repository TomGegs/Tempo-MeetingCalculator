import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { TimerWrapper } from './@/components/meetingTimer/timer/TimerWrapper';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timer" element={<TimerWrapper />} />
        </Routes>
    );
};

export default App;
