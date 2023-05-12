import React from 'react';
import styled from 'styled-components';

const Header = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <St.HeaderWrapper>
      <h1 onClick={handleRefresh}>WEATHER FOREST</h1>
    </St.HeaderWrapper>
  );
};

export default Header;

const St = {
  HeaderWrapper: styled.header`
    display: flex;
    align-items: center;

    padding: 2rem 5rem;

    & h1 {
      color: ${({ theme }) => theme.colors.Weather_Main};
      ${({ theme }) => theme.fonts.Pretendard_Title};

      cursor: pointer;
    }
  `,
};
