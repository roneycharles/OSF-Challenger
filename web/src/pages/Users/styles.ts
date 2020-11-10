import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

export const Container = styled.div`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
`;

export const Error = styled.div`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const AddUser = styled.div`
  display:flex;
  /* align-content: center; */
  align-items: center;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const User = styled.div`
  margin-top: 50px;
  max-width: 700px;
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    & > div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        font-weight: bold;
        color: #3d3d3d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }

      div {
        display: flex;
        flex-direction: row;
        p {
          color: #3d3d3d;
          margin-right: 5px;
        }
      }
    }
  }
`;

export const UserButtons = styled.div`
  button {
    /* display: flex; */
    justify-content: center;
    align-items: center;
    padding: 3px;
    height: 32px;
    width: 32px;
    border: 0;
    margin-left: auto;
    margin-bottom: 24px;

    background-color: ${shade(0.5, 'transparent')};

    svg {
      color: orange;
      &:hover {
      /* transform: translateX(10px);
      transition: transform 0.2s; */
      }
    }
  }

  button:last-child {
    margin-top: 5px;

    svg {
      color: red;
    }
  }
`;
