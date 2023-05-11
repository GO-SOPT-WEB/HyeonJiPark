import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return <St.HeaderWrapper>Weather Forecast</St.HeaderWrapper>;
};

export default Header;

const St = {
  HeaderWrapper: styled.header`
    display: flex;
    align-items: center;

    padding: 2rem 5rem;

    color: ${({ theme }) => theme.colors.Weather_Main};
    ${({ theme }) => theme.fonts.Pretendard_Title};
  `,
};
