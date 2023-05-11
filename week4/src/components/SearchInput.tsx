import React from 'react';
import { styled } from 'styled-components';

import { IcLocation } from '../assets/icons';

const SearchInput = () => {
  return (
    <St.SearchInputWrapper>
      <img src={IcLocation} alt='location' />
      <input type='search' id='' name='' placeholder='Search Location' value='' />
      <button type='button'>검색</button>
    </St.SearchInputWrapper>
  );
};

export default SearchInput;

const St = {
  SearchInputWrapper: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    padding: 1rem 0rem;

    & > img {
      width: 4rem;
    }

    & > input {
      width: 50rem;
      height: 5rem;

      padding-left: 3rem;

      ${({ theme }) => theme.fonts.Pretendard_Search};

      border: 0.1rem solid ${({ theme }) => theme.colors.Weather_Main};
      border-radius: 3rem;

      outline: none;
    }

    & > button {
      padding: 1rem 2rem;

      ${({ theme }) => theme.fonts.Pretendard_Search};
      color: ${({ theme }) => theme.colors.Weather_White};
      background-color: ${({ theme }) => theme.colors.Weather_Main};
      border-radius: 1.5rem;
    }
  `,
};
