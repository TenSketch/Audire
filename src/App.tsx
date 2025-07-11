import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, User, AudioLines,ShieldAlert, Theater } from 'lucide-react';
import Demo from './components/blocks/Demo';
import Awards from './components/Awards';
import Footer from './components/Footer';
import OurProducts from './components/OurProducts';
import HighEndAV from './pages/HighEndAv'; 
import HomeTheater from './pages/HomeTheater';
import AutomationSystems from './pages/AutomationSystem';
import { NavBar } from './components/ui/tubelight-navbar';

function App() {
  return (
    <Router>
      <NavBar
        items={[
          { name: 'About', url: '/#about', icon: User },
          { name: 'High-End AV', url: '/high-end-av', icon: AudioLines },
          { name: 'Home Theater', url: '/home-theater', icon: Theater },
          { name: 'Automation Systems', url: '/automation-systems', icon: ShieldAlert },
        ]}
      />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Demo />
              <Awards />
              <OurProducts />
              <Footer />
            </>
          }
        />

        {/* High-End AV Page */}
        <Route path="/high-end-av" element={<HighEndAV />} />
        <Route path="/home-theater" element={<HomeTheater />} />
        <Route path="/automation-systems" element={<AutomationSystems />} />

        {/* Fallback Route */}
      </Routes>
    </Router>
  );
}

export default App;
