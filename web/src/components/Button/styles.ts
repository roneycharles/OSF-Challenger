import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  height: 70px;
  border-radius: 0px 5px 5px 0px;
  border: 0;
  width: 210px;
  background: #04d361;
  font-weight: bold;
  transition: background-color 0.2s;
  padding: 16px;

  button {
    background: transparent;
    border: 0;
    color: #fff;
    font-weight: bold;
  }

  &:hover {
    background: ${shade(0.2, '#04d361')};
  }
`;
