import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import { Background } from '../assets/backgrounds';

const SearchPage = () => {
  return (
    <St.SearchPageWrapper>
      <Header />
      <SearchInput />
      <St.SearchResultWrapper>
        <Outlet />
      </St.SearchResultWrapper>
    </St.SearchPageWrapper>
  );
};

export default SearchPage;

const St = {
  SearchPageWrapper: styled.main`
    height: 100vh;

    background: url(${Background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `,

  SearchResultWrapper: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    padding: 2rem;
  `,
};
