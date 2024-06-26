// src/pages/CurrentWeather.js
import React, { useState } from 'react';
import axios from 'axios';
import { Box, Text, Heading, Container } from '@chakra-ui/react';
import CityForm from '../components/CityForm';
import '../App.css';

const CurrentWeather = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (data) => {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=6a4dfcea62284185924190538242506&q=${data.city}`);
      setWeather(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados do clima:", error);
    }
  };

  return (
    <Container className="container">
      <Box className="header">
        <Heading>Previsão do Tempo Atual</Heading>
      </Box>
      <CityForm onSubmit={fetchWeather} />
      {weather && (
        <Box className="weather-info">
          <Heading as="h2">Informações do Tempo</Heading>
          <Text>Temperatura Atual: {weather.current.temp_c}°C</Text>
          <Text>Condição: {weather.current.condition.text}</Text>
        </Box>
      )}
    </Container>
  );
};

export default CurrentWeather;
