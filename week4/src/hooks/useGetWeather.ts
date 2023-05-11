import useSWR from 'swr';
import { getFetcher } from '../libs/axios';
import { WeatherInfo } from '../types/weatherInfo';

export const useGetDailyWeather = (area: string) => {
  const { data, isLoading, error } = useSWR<WeatherInfo>(
    `/weather?q=${area}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric`,
    getFetcher,
    {
      errorRetryCount: 3,
    },
  );
  return {
    dailyWeatherInfo: data || null,
    isLoading,
    isError: error,
  };
};

export const useGetWeeklyWeather = (area: string) => {
  const { data, isLoading, error } = useSWR<WeatherInfo[]>(
    `/forecast?q=${area}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric
    `,
    getFetcher,
    {
      errorRetryCount: 3,
    },
  );
  return {
    weeklyWeatherInfo: data,
    isLoading,
    isError: error,
  };
};
