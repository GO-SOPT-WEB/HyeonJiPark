import styled from 'styled-components';
import { IcError } from '../assets/icons';

const Error = () => {
  return (
    <St.ErrorWrapper>
      <img src={IcError} alt='error' />
    </St.ErrorWrapper>
  );
};

export default Error;
const St = {
  ErrorWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 4rem;

    & > img {
      width: 100%;
    }
  `,
};
