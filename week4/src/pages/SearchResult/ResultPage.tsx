import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetDailyWeather } from '../../hooks/useGetWeather';
import WeatherCard from '../../components/WeatherCard';
import { WeatherInfo } from '../../types/weatherInfo';

const ResultPage = () => {
  const { currentSearchInput } = useParams() as { currentSearchInput: string };
  const { dailyWeatherInfo, isLoading, isError } = useGetDailyWeather(currentSearchInput);

  if (isLoading) return null;
  if (isError) return null;

  return dailyWeatherInfo && <WeatherCard weather={dailyWeatherInfo as WeatherInfo} />;
};

export default ResultPage;
