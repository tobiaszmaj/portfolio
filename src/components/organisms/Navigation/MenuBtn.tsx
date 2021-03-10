import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { NavigationContext } from 'contexts/NavigationContext';

interface Props {
  readonly isActive: boolean;
}

const Button = styled.button<Props>`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 20;
  background-color: transparent;
  ${({ isActive }) =>
    isActive &&
    css`
      &:before {
        transform: scale(10);
      }
      & > ${SVG} {
        transform: rotate(45deg);
      }
      & > ${SVG} ${LineTop} {
        stroke-dashoffset: -98px;
      }
      & > ${SVG} ${LineBottom} {
        stroke-dashoffset: -138px;
      }
    `}
`;

const Line = styled.path`
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: ${({ theme }) => theme.white};
  stroke-width: 5.5;
  stroke-linecap: round;
`;

const LineTop = styled(Line)`
  stroke-dasharray: 40 139;
`;

const LineBottom = styled(Line)`
  stroke-dasharray: 40 180;
`;

const SVG = styled.svg`
  cursor: pointer;
  transition: transform 0.4s;
  user-select: none;
`;

const MenuBtn = () => {
  const { isFullNavVisible, handleFullNav } = useContext(NavigationContext);

  const toggleNav = () => {
    handleFullNav(!isFullNavVisible);
  };

  return (
    <Button onClick={toggleNav} isActive={isFullNavVisible}>
      <SVG viewBox="0 0 100 100" width="60">
        <LineTop d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
        <Line d="m 30,50 h 40" />
        <LineBottom d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
      </SVG>
    </Button>
  );
};

export default MenuBtn;