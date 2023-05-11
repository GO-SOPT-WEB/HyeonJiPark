import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';

import { IcLocation } from '../assets/icons';

const SearchPage = () => {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef?.current?.focus();
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === '') {
      alert('지역을 입력하세요');
    } else {
      navigate(`/${input}`);
    }
    setInput('');
  };

  return (
    <St.SearchPageWrapper>
      <Header />
      <St.SearchInputWrapper>
        <img src={IcLocation} alt='location' />
        <form onSubmit={handleSubmit}>
          <input
            type='search'
            placeholder='Search Location'
            value={input}
            onChange={handleChange}
            ref={inputRef}
          />
        </form>
        <button type='button'>검색</button>
      </St.SearchInputWrapper>
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

  SearchInputWrapper: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    padding: 1rem 0rem;

    & > img {
      width: 4rem;
    }

    & > form > input {
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
