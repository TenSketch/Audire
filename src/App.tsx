import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Demo from './components/blocks/Demo';
import Awards from './components/Awards';
import Footer from './components/Footer';
import OurProducts from './components/OurProducts';
import HighEndAV from './pages/HighEndAv'; 

function App() {
  return (
    <Router>
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
