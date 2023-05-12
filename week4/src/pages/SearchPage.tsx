import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import { Background } from '../assets/backgrounds';

// TODO
// 1. 제목 누르면 새로고침, 파비콘
// 2. 로딩, 에러 컴포넌트
// 3. 드롭박스 스타일링, input 보여주기
// 4. 배포

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
    background-color: ${({ theme }) => theme.colors.Weather_Background};
  `,

  SearchResultWrapper: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    padding: 2rem;
  `,
};
