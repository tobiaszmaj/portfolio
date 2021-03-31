// @ts-nocheck
import styled, { css, keyframes } from 'styled-components';

interface Props {
  readonly secondary?: boolean;
  readonly animated?: boolean;
  readonly submit?: boolean;
  readonly isSubmitting?: boolean;
  readonly color?: string;
}

const pulse = keyframes`
  20% {
    box-shadow: 0 0 0 30px rgba(217, 244, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(217, 244, 255, 0);
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Button = styled.button<Props>`
  display: block;
  width: 180px;
  padding: 16px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: ${({ theme }) => theme.fonts.mainFont};
  border: 2px solid ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.blueGradient};
  color: ${({ theme }) => theme.black};
  transition: 0.3s all;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.white};
    border-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
  }
  ${({ secondary }) =>
    secondary &&
    css`
      background: transparent;
      color: ${({ theme }) => theme.green} !important;
      border: 2px solid ${({ theme }) => theme.green};
    `}
    ${({ submit }) =>
    submit &&
    css`
      border-color: ${({ theme }) => theme.white};
      background: ${({ theme }) => theme.blueGradient};
      color: ${({ theme }) => theme.white};
      font-size: ${({ theme }) => theme.fontSize.m};
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 70px;
      &:hover {
        border-color: ${({ theme }) => theme.white};
        color: ${({ theme }) => theme.black};
        background: ${({ theme }) => theme.white};
        background-size: 150%;
      }
      &:before {
        content: '';
        position: absolute;
        width: 24px;
        height: 24px;
        border: 3px solid ${({ theme }) => theme.white};
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        border-radius: 0;
        opacity: ${({ isSubmitting }) => (isSubmitting ? '1' : '0')};
        animation: ${spin} 1s ease infinite;
      }
    `}
  ${({ animated }) =>
    animated &&
    css`
      box-shadow: 0 0 0 0 rgba(217, 244, 255, 0.15);
      animation: ${pulse} 3.5s infinite cubic-bezier(0.66, 0, 0, 1);
      animation-delay: 2s;
    `}
    ${({ color }) =>
    color === 'blue' &&
    css`
      border-color: ${({ theme }) => theme.blue};
      background: ${({ theme }) => theme.blue};
    `}
  ${({ color }) =>
    color === 'green' &&
    css`
      border-color: ${({ theme }) => theme.green} !important;
      background: ${({ theme }) => theme.green} !important;
      &:hover {
        border-color: ${({ theme }) => theme.green};
        background: ${({ theme }) => theme.green};
      }
    `}
  ${({ color }) =>
    color === 'red' &&
    css`
      border-color: ${({ theme }) => theme.red} !important;
      background: ${({ theme }) => theme.red} !important;
      &:hover {
        border-color: ${({ theme }) => theme.red};
        background: ${({ theme }) => theme.red};
      }
    `}
`;

export default Button;