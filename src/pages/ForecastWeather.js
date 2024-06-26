// src/pages/ForecastWeather.js
import React, { useState } from 'react';
import axios from 'axios';
import { Box, Text, Heading, Container } from '@chakra-ui/react';
import CityForm from '../components/CityForm';
import '../App.css';

const ForecastWeather = () => {
  const [forecast, setForecast] = useState(null);

  const fetchForecast = async (data) => {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=6a4dfcea62284185924190538242506&q=${data.city}&days=5`);
      setForecast(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados do clima:", error);
    }
  };

  return (
    <Container className="container">
      <Box className="header">
        <Heading>Previsão do Tempo para 5 dias</Heading>
      </Box>
      <CityForm onSubmit={fetchForecast} />
      {forecast && (
        <Box className="weather-info">
          <Heading as="h2">Previsão dos Próximos 5 Dias</Heading>
          {forecast.forecast.forecastday.map((day) => (
            <Box key={day.date} mt={4} className="forecast-day">
              <Text>Data: {day.date}</Text>
              <Text>Temperatura Máxima: {day.day.maxtemp_c}°C</Text>
              <Text>Temperatura Mínima: {day.day.mintemp_c}°C</Text>
              <Text>Condição: {day.day.condition.text}</Text>
            </Box>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default ForecastWeather;
