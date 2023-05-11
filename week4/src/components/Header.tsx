import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return <St.HeaderWrapper>Weather Forecast</St.HeaderWrapper>;
};

export default Header;

const St = {
  HeaderWrapper: styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
