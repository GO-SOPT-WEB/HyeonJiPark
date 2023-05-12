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
  console.log(weather);
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
  const date = dt_txt?.substring(5, 10);

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
      {/* <p>지역: {name}</p> */}
      <St.Date>{date}</St.Date>
      <St.Temperature>
        {temp}
        <span> °C</span>
      </St.Temperature>
      <St.SubTemperature>
        <span>{temp_max}°C</span>
        <span> | </span>
        <span>{temp_min}°C</span>
      </St.SubTemperature>
      <St.WeatherIcon src={weatherType?.imgURL} alt={weatherType?.description} />
      <St.SubInfo>
        <div>
          <p>체감온도</p>
          {feels_like}
        </div>
        <div>
          <p>구름</p>
          {all}
        </div>
      </St.SubInfo>
    </St.WeatherCardWrapper>
  );
};

export default WeatherCard;

const St = {
  WeatherCardWrapper: styled.article<{ background: string }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 25rem;
    height: 40rem;

    background-image: url(${(props) => props.background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    border-radius: 1rem;
  `,
  Date: styled.h2`
    padding-top: 2rem;

    font-family: ${({ theme }) => theme.fonts.Pretendard_Content1};
    color: ${({ theme }) => theme.colors.Weather_White};
  `,
  Temperature: styled.span`
    padding-top: 1rem;

    font-family: ${({ theme }) => theme.fonts.Pretendard_Temperature};
    color: ${({ theme }) => theme.colors.Weather_White};
  `,
  SubTemperature: styled.span`
    margin-top: -0.5rem;

    font-family: ${({ theme }) => theme.fonts.Pretendard_Content1};
    color: ${({ theme }) => theme.colors.Weather_White};
  `,
  WeatherIcon: styled.img`
    width: 15rem;
    height: 10rem;

    padding-top: 1rem;
  `,
  SubInfo: styled.div`
    display: flex;
    gap: 1rem;

    padding-top: 9rem;
    padding-bottom: 2rem;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 8rem;
      height: 6rem;

      font-family: ${({ theme }) => theme.fonts.Pretendard_Content2};
      background: rgba(107, 107, 107, 0.3);
      color: ${({ theme }) => theme.colors.Weather_White};
      border-radius: 1rem;
    }
  `,
};
