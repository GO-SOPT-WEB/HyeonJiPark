import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import { styled } from 'styled-components';

import { IcLocation } from '../assets/icons';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const [input, setInput] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [forecastType, setForecastType] = useState('daily');

  const inputRef = useRef<HTMLInputElement>(null);
  let historyRef = useRef<HTMLDivElement>(null);
  const [historyList, setHistoryList] = useState<string[]>(
    JSON.parse(localStorage.getItem('history') || '[]'),
  ); // 검색 히스토리 저장

  const navigate = useNavigate();

  useEffect(() => {
    if (input !== '') {
      navigate(`/${forecastType}/${input}`);
    }
  }, [forecastType]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      // 드롭다운 외 영역 클릭 감지
      if (historyRef.current && !historyRef.current.contains(e.target as Node)) {
        setIsFocus(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [historyRef]);

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(historyList));
  }, [historyList]);

  const handleforecastType = (e: ChangeEvent<HTMLSelectElement>) => {
    setForecastType(e.target.value);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === '') {
      alert('지역을 입력하세요');
    } else {
      navigate(`/${forecastType}/${input}`);
      if (!historyList.includes(input)) {
        setHistoryList([...historyList, input]);
      }
    }
  };

  const handleRemoveHistory = (e: React.MouseEvent, target: string) => {
    e.stopPropagation();
    const newHistoryList = historyList.filter((history) => history !== target);
    setHistoryList(newHistoryList);
  };

  const handleClickHistory = (history: string) => {
    navigate(`/${forecastType}/${history}`);
    setInput(history);
    setIsFocus(false);
  };

  return (
    <St.SearchInputWrapper>
      <St.Select value={forecastType} onChange={handleforecastType}>
        <option value='daily'>일간</option>
        <option value='weekly'>주간</option>
      </St.Select>
      <img src={IcLocation} alt='location' />
      <St.Form onSubmit={handleSubmit}>
        <input
          type='search'
          placeholder='Search Location'
          value={input}
          onChange={handleChange}
          onFocus={() => setIsFocus(true)}
          ref={inputRef}
        />
        <button type='submit'>검색</button>
        {isFocus && (
          <St.SearchHistories ref={historyRef}>
            {historyList.map((history) => (
              <St.DropdownList key={history}>
                <St.DropdownItem onClick={() => handleClickHistory(history)}>
                  {history}
                  <St.DeleteButton onClick={(e) => handleRemoveHistory(e, history)}>
                    X
                  </St.DeleteButton>
                </St.DropdownItem>
              </St.DropdownList>
            ))}
          </St.SearchHistories>
        )}
      </St.Form>
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
  `,

  Form: styled.form`
    position: relative;

    & > input {
      width: 50rem;
      height: 5rem;

      padding-left: 3rem;
      margin-right: 1rem;

      font-family: ${({ theme }) => theme.fonts.Pretendard_Search};
      border: 0.1rem solid ${({ theme }) => theme.colors.Weather_Main};
      border-radius: 3rem;

      outline: none;
    }

    & > button {
      padding: 1rem 2rem;

      color: ${({ theme }) => theme.colors.Weather_White};
      background-color: ${({ theme }) => theme.colors.Weather_Main};
      font-family: ${({ theme }) => theme.fonts.Pretendard_Search};
      border-radius: 1.5rem;
    }
  `,

  Select: styled.select`
    appearance: none;

    padding: 0.5rem 2rem;

    font-family: ${({ theme }) => theme.fonts.Pretendard_Search};
    background-color: ${({ theme }) => theme.colors.Weather_Main};
    color: ${({ theme }) => theme.colors.Weather_White};
    border: none;
    border-radius: 1.5rem;

    cursor: pointer;
    outline: none;

    & > option {
      height: 2rem;

      background-color: ${({ theme }) => theme.colors.Weather_Background};
    }
  `,

  SearchHistories: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    position: absolute;
    top: 5rem;
    left: 0rem;

    width: 50rem;
    height: fit-content;
    margin-top: 1rem;

    background-color: ${({ theme }) => theme.colors.Weather_White};
    border-radius: 1rem;

    opacity: 0.9;
  `,

  DropdownList: styled.ul`
    display: flex;
    align-items: center;

    width: 100%;
    height: 5rem;

    > *:hover {
      color: ${({ theme }) => theme.colors.Weather_Main};
    }
  `,

  DropdownItem: styled.li`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    width: 100%;
    padding: 1rem 2rem;

    font-family: ${({ theme }) => theme.fonts.Pretendard_Search};

    cursor: pointer;
  `,

  DeleteButton: styled.button`
    padding: 1rem;
  `,
};
