import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from './components/Header';

// Pages
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

// Phone preview box
import PhonePreview from './pages/PhonePreview';

function App() {
  const [mobileMode, setMobileMode] = useState(false);
  

  return (
    <div className={mobileMode ? "mobile-mode" : ""}>
      <BrowserRouter>
        
        {/* Header always visible */}
        <Header mobileMode={mobileMode} setMobileMode={setMobileMode} />

        {/* 📱 Phone Frame Visible Only When Mobile Mode ON */}
        {mobileMode && <PhonePreview mobileMode={mobileMode} />}


        {/* Normal page content only when mobile mode OFF */}
        {!mobileMode && (
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        )}

      </BrowserRouter>
    </div>
  );
}

export default App;
