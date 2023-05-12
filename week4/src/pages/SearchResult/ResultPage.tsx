import React from 'react';
import { styled } from 'styled-components';

import { useParams } from 'react-router-dom';
import { useGetDailyWeather, useGetWeeklyWeather } from '../../hooks/useGetWeather';
import { GetFiveDayWeatherInfo, WeatherInfo } from '../../types/weatherInfo';
import { IcLocation } from '../../assets/icons';

import WeatherCard from '../../components/WeatherCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

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

  if (isError) return <Error />;

  return (
    <St.ResultWrapper>
      <St.Location>
        <img src={IcLocation} alt='location' />
        <span>{location.toUpperCase()}</span>
      </St.Location>
      <St.WeatherWrapper>
        {forecastType === 'daily' ? (
          isLoading ? (
            <Loading />
          ) : (
            <WeatherCard weather={dailyWeatherInfo as WeatherInfo} />
          )
        ) : (
          Array.from({ length: 5 }).map((_, index) =>
            isLoading ? (
              <Loading key={index} />
            ) : (
              <WeatherCard key={index} weather={fiveDayWeather[index]} />
            ),
          )
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
