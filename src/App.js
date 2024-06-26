// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
import CurrentWeather from './pages/CurrentWeather';
import ForecastWeather from './pages/ForecastWeather';
import './App.css';

const App = () => {
  return (
    <Box className="container">
      <Box className="header">
        <Button as={Link} to="/current" mr={2} colorScheme="blue" className="nav-button">Previsão Atual</Button>
        <Button as={Link} to="/forecast" colorScheme="blue" className="nav-button">Previsão para 5 dias</Button>
      </Box>
      <Routes>
        <Route path="/current" element={<CurrentWeather />} />
        <Route path="/forecast" element={<ForecastWeather />} />
      </Routes>
    </Box>
  );
};

export default App;
