import React, { useState, useMemo, ChangeEvent, useRef, useEffect } from 'react';
import { styled } from 'styled-components';

import { IcLocation } from '../assets/icons';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
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
