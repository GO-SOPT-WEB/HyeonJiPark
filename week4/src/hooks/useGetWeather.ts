import useSWR from 'swr';
import { getFetcher } from '../libs/axios';
import { GetFiveDayWeatherInfo, WeatherInfo } from '../types/weatherInfo';

export const useGetDailyWeather = (area: string) => {
  const { data, isLoading, error } = useSWR<WeatherInfo>(
    `/weather?q=${area}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric`,
    getFetcher,
    {
      errorRetryCount: 3,
    },
  );
  return {
    dailyWeatherInfo: data,
    isLoading,
    isError: error,
  };
};

export const useGetWeeklyWeather = (area: string) => {
  const { data, isLoading, error } = useSWR<GetFiveDayWeatherInfo>(
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
