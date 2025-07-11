import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, User, AudioWaveform, Award } from 'lucide-react';
import Demo from './components/blocks/Demo';
import Awards from './components/Awards';
import Footer from './components/Footer';
import OurProducts from './components/OurProducts';
import HighEndAV from './pages/HighEndAv'; 
import { NavBar } from './components/ui/tubelight-navbar';

function App() {
  return (
    <Router>
      <NavBar
        items={[
          { name: 'About', url: '/#about', icon: User },
          { name: 'Products', url: '/#products', icon: AudioWaveform },
          { name: 'High-End AV', url: '/high-end-av', icon: Award },
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
      </Routes>
    </Router>
  );
}

export default App;
