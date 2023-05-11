import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';
import SearchInput from '../components/SearchInput';

const SearchPage = () => {
  return (
    <St.SearchPageWrapper>
      <Header />
      <SearchInput />
      <St.WeatherWrapper>
        <Outlet />
      </St.WeatherWrapper>
    </St.SearchPageWrapper>
  );
};

export default SearchPage;

const St = {
  SearchPageWrapper: styled.main`
    height: 100vh;

    background-color: ${({ theme }) => theme.colors.Weather_Background};
  `,

  WeatherWrapper: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 5rem;
  `,
};
