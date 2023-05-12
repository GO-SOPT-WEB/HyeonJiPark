import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetDailyWeather, useGetWeeklyWeather } from '../../hooks/useGetWeather';
import WeatherCard from '../../components/WeatherCard';
import { GetFiveDayWeatherInfo, WeatherInfo } from '../../types/weatherInfo';
import { IcLocation } from '../../assets/icons';
import { styled } from 'styled-components';
import Loading from '../../components/Loading';

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

  if (isLoading) return <Loading />;
  if (isError) return null;

  return (
    <St.ResultWrapper>
      <St.Location>
        <img src={IcLocation} alt='location' />
        <span>{location.toUpperCase()}</span>
      </St.Location>
      <St.WeatherWrapper>
        {forecastType === 'daily' ? (
          <WeatherCard weather={dailyWeatherInfo as WeatherInfo} />
        ) : (
          <>
            {fiveDayWeather.map((weather: WeatherInfo) => (
              <WeatherCard key={weather.dt} weather={weather} />
            ))}
          </>
        )}
      </St.WeatherWrapper>
    </St.ResultWrapper>
  );
};

export default ResultPage;

const St = {
  ResultWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  `,
  WeatherWrapper: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    padding: 0rem 1rem;
    width: 100vw;
  `,
  Location: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & > span {
      font-family: ${({ theme }) => theme.fonts.Pretendard_Content1};
    }
    & > img {
      width: 3.5rem;
    }
  `,
};
