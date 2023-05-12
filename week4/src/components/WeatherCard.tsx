import React from 'react';
import { styled } from 'styled-components';
import { WeatherInfo, weatherType } from '../types/weatherInfo';
import { WEATHER_TYPE } from '../constants/weather';
import { BgClear, BgCloud, BgMist, BgRain, BgSnowThunder } from '../assets/backgrounds';

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

  const handleWeatherBackground = () => {
    switch (description) {
      case 'clear sky':
        return BgClear;
      case 'few clouds':
      case 'broken clouds':
      case 'overcast clouds':
      case 'scattered clouds':
        return BgCloud;
      case 'rain':
      case 'light rain':
      case 'shower rain':
      case 'moderate rain':
      case 'heavy intensity rain':
        return BgRain;
      case 'mist':
        return BgMist;
      case 'snow':
      case 'thunderstorm':
        return BgSnowThunder;
      default:
        return '';
    }
  };

  return (
    <St.WeatherCardWrapper background={handleWeatherBackground()}>
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
  WeatherCardWrapper: styled.article<{ background: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 25rem;
    height: 40rem;

    background-image: url(${(props) => props.background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    border-radius: 1rem;

    & > img {
      width: 15rem;
      height: 15rem;
    }
  `,
};
