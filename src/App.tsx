import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { MeetingTimer } from './pages/MeetingTimer';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timer" element={<MeetingTimer />} />
        </Routes>
    );
};

export default App;
