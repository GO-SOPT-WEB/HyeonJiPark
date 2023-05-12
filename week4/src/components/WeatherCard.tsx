import React from 'react';
import { styled } from 'styled-components';
import { WeatherInfo, weatherType } from '../types/weatherInfo';
import { WEATHER_TYPE } from '../constants/weather';

interface WeatherCardProps {
  weather: WeatherInfo;
}

const WeatherCard = ({ weather }: WeatherCardProps) => {
  if (!weather) return null;

  const {
    name,
    weather: [{ description }],
    main: { temp, feels_like, temp_min, temp_max },
    clouds: { all },
    dt_txt,
  } = weather;
  const weatherType = WEATHER_TYPE.find(
    (weather: weatherType) => weather.description === description,
  );

  return (
    <St.WeatherCardWrapper>
      <p>지역: {name}</p>
      <p>날씨: {description}</p>
      <p>날짜: {dt_txt}</p>
      <img src={weatherType?.imgURL} alt={weatherType?.description} />
      <p>온도 : {temp}</p>
      <span>최저: {temp_min}</span>
      <span>최고: {temp_max}</span>
      <p>체감온도: {feels_like}</p>
      <p>구름: {all}</p>
    </St.WeatherCardWrapper>
  );
};

export default WeatherCard;

const St = {
  WeatherCardWrapper: styled.article`
    display: flex;
    flex-direction: column;

    width: 30rem;
    height: 40rem;

    background-color: ${({ theme }) => theme.colors.Weather_Main};

    & > img {
      width: 15rem;
      height: 15rem;
    }
  `,
};
