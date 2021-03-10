import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logoImg from 'assets/images/logo.png';

interface Props {
    isWhite?: boolean;
}

interface ImgProps {
    readonly isWhite: boolean;
}

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  z-index: -1;
`;

const InnerWrapper = styled.div`
  display: block;
  width: 55px;
  height: 55px;
  ${({ theme }) => theme.mq.xs} {
    width: 65px;
    height: 65px;
  }
`;

const Img = styled.img<ImgProps>`
  display: block;
  width: 100%;
  height: 100%;
  filter: ${({ isWhite }) => (isWhite ? 'brightness(100)' : 'brightness(1)')};
`;

const Title = styled.h3`
  margin-left: 10px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  ${({ theme }) => theme.mq.xs} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const Logo = ({ isWhite }: Props) => (
    <Wrapper to="/">
        <InnerWrapper>
            <Img isWhite={isWhite || false} src={logoImg} alt="logo" />
        </InnerWrapper>
        <Title>
            Tobiasz
      <br />
      Maj
    </Title>
    </Wrapper>
);

export default Logo;