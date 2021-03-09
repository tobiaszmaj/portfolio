import styled, { css, keyframes } from 'styled-components';

interface Props {
  readonly secondary?: boolean | string;
  readonly animated?: boolean | string;
}

const pulse = keyframes`
  20% {
    box-shadow: 0 0 0 30px rgba(217, 244, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(217, 244, 255, 0);
  }
`;

const Button = styled.button<Props>`
  display: block;
  width: 220px;
  padding: 20px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  border: 2px solid ${({ theme }) => theme.blue};
  background-color: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.dark};
  transition: 0.3s;
  border-radius: 50px;
  text-decoration: none;
  &:hover {
    background-color: ${({ theme }) => theme.white};
    border-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.dark};
  }
  ${({ secondary }) =>
    secondary &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.blue};
    `}
  ${({ animated }) =>
    animated &&
    css`
      box-shadow: 0 0 0 0 rgba(217, 244, 255, 0.15);
      animation: ${pulse} 3.5s infinite cubic-bezier(0.66, 0, 0, 1);
      animation-delay: 2s;
    `}
`;

export default Button;