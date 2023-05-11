import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';

const SearchPage = () => {
  return (
    <St.SearchPageWrapper>
      <Header />
    </St.SearchPageWrapper>
  );
};

export default SearchPage;

const St = {
  SearchPageWrapper: styled.main`
    height: 100vh;

    background-color: ${({ theme }) => theme.colors.Weather_Background};
  `,
};
