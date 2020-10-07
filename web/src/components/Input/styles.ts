import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 70px;
  padding: 16px;
  border: 0;
  border-radius: 5px 0 0 5px;
  border-right: 0;
  width: 100%;

  color: #a8a8b3;
  border: 2px solid #04d361;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9922;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9922;
      border-color: #ff9922;
    `}



  input {
    flex: 1;
    background: transparent;
    border: 0;
    &::placeholder {
      color: #a8a8b3;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
