import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageContextProvider } from './context/LanguageContext';
import React from 'react';
import HomePage from './components/HomePage';
import GameZone from './components/GameZone';

const RouteSwitch = () => {
  return (
    <LanguageContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/portfolio" />} />
          <Route path="/portfolio" element={<HomePage />} />
          <Route path="/portfolio/game_zone" element={<GameZone />} />
        </Routes>
      </BrowserRouter>
    </LanguageContextProvider>
  );
};

export default RouteSwitch;
