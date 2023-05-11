import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetDailyWeather } from '../../hooks/useGetWeather';
import WeatherCard from '../../components/WeatherCard';
import { WeatherInfo } from '../../types/weatherInfo';

const ResultPage = () => {
  const { location } = useParams() as { location: string };
  const { dailyWeatherInfo, isLoading, isError } = useGetDailyWeather(location);

  if (isLoading) return null;
  if (isError) return null;

  return dailyWeatherInfo && <WeatherCard weather={dailyWeatherInfo as WeatherInfo} />;
};

export default ResultPage;
