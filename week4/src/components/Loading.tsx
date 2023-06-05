import { keyframes, styled } from 'styled-components';

const Loading = () => {
  return (
    <St.WeatherCardWrapper>
      <St.Date></St.Date>
      <St.Temperature></St.Temperature>
      <St.SubTemperature></St.SubTemperature>
      <St.WeatherIcon />
      <St.SubInfo>
        <div></div>
        <div></div>
      </St.SubInfo>
    </St.WeatherCardWrapper>
  );
};

export default Loading;

const loading = keyframes`
    0% {
        background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
        background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
        background-color: rgba(165, 165, 165, 0.1);
    }
`;

const St = {
  WeatherCardWrapper: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 25rem;
    height: 40rem;

    background: #e4e4e4;
    border-radius: 1rem;
  `,
  Date: styled.div`
    margin: 2rem;

    width: 50%;
    height: 3rem;

    background: #5a5a5a;
    border-radius: 1rem;

    animation: ${loading} 2s infinite linear;
  `,
  Temperature: styled.span`
    padding-top: 1rem;

    width: 70%;
    height: 5.5rem;

    background: #5a5a5a;
    border-radius: 1rem;

    animation: ${loading} 2s infinite linear;
  `,
  SubTemperature: styled.span`
    margin-top: 1rem;

    width: 65%;
    height: 2.5rem;

    background: #5a5a5a;
    border-radius: 1rem;

    animation: ${loading} 2s infinite linear;
  `,
  WeatherIcon: styled.div`
    width: 11rem;
    height: 12rem;
    margin: 2rem 0rem;

    background: #5a5a5a;
    border-radius: 10rem;

    animation: ${loading} 2s infinite linear;
  `,
  SubInfo: styled.div`
    display: flex;
    gap: 1rem;

    padding-top: 3rem;
    padding-bottom: 2rem;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 8rem;
      height: 6rem;

      background: #5a5a5a;
      border-radius: 1rem;

      animation: ${loading} 2s infinite linear;
    }
  `,
};
