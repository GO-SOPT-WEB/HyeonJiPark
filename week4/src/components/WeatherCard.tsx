import React from 'react';
import { styled } from 'styled-components';

const WeatherCard = () => {
  return (
    <St.WeatherCardWrapper>
      <p>날짜</p>
      <p>사진</p>
      <p>온도</p>
      <span>최고</span>
      <span>최고</span>
      <p>체감온도</p>
      <p>구름</p>
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
  `,
};
