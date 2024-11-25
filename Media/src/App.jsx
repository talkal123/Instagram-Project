import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './Pages/SignInPage'; //
import Home from './Pages/Home'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} /> {/* דף ההתחברות כעמוד הבית */}
        <Route path="/home" element={<Home />} /> {/* נתיב נוסף לדף הבית */}
        <Route path="/sign-in" element={<SignInPage />} /> {/* נתיב לעמוד ההתחברות */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
