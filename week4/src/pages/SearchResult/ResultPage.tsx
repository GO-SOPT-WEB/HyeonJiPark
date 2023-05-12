import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetDailyWeather, useGetWeeklyWeather } from '../../hooks/useGetWeather';
import WeatherCard from '../../components/WeatherCard';
import { GetFiveDayWeatherInfo, WeatherInfo } from '../../types/weatherInfo';

type ResultData = {
  dailyWeatherInfo?: WeatherInfo;
  weeklyWeatherInfo?: GetFiveDayWeatherInfo;
  isLoading: boolean;
  isError: any;
};

const ResultPage = () => {
  const { forecastType, location } = useParams() as { forecastType: string; location: string };
  const { dailyWeatherInfo, weeklyWeatherInfo, isLoading, isError }: ResultData =
    forecastType === 'daily' ? useGetDailyWeather(location) : useGetWeeklyWeather(location);

  let fiveDayWeather: WeatherInfo[] = [];

  if (weeklyWeatherInfo?.list) {
    fiveDayWeather = weeklyWeatherInfo.list.filter((_, index) => index % 8 === 0);
  }

  if (isLoading) return null;
  if (isError) return null;

  console.log(weeklyWeatherInfo);

  return (
    <>
      {forecastType === 'daily' ? (
        <WeatherCard weather={dailyWeatherInfo as WeatherInfo} />
      ) : (
        <>
          {fiveDayWeather.map((weather: WeatherInfo) => (
            <WeatherCard key={weather.dt} weather={weather} />
          ))}
        </>
      )}
    </>
  );
};

export default ResultPage;
