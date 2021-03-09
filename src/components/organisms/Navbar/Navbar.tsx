import React, { useRef, useEffect, useContext } from 'react';
import { Link } from 'gatsby';
import gsap from 'gsap';
import styled, { css } from 'styled-components';
import Content from 'components/atoms/Content/Content';
import MenuBtn from 'components/atoms/MenuBtn/MenuBtn';
import logoImg from 'assets/images/logo.png';
import { NavigationContext } from 'contexts/NavigationContext';

interface Props {
  readonly isActive: boolean;
}

const Wrapper = styled.nav<Props>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 10;
  box-shadow: none;
  background-color: transparent;
  transition: 0.3s;
  ${({ theme }) => theme.mq.md} {
    position: fixed;
    ${({ isActive }) =>
    isActive &&
    css`
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        background-color: ${({ theme }) => theme.dark100};
      `}
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.white};
`;

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.white};
  text-decoration: none;
`;

const LogoInnerWrapper = styled.div`
  display: block;
  width: 55px;
  height: 55px;
  ${({ theme }) => theme.mq.s} {
    width: 65px;
    height: 65px;
  }
`;

const Logo = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const Title = styled.h3`
  margin-left: 10px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  ${({ theme }) => theme.mq.s} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
`;

const ListItem = styled.li<Props>`
display: none;
  position: relative;
  margin-left: 35px;
  font-weight: ${({ theme }) => theme.medium};
  opacity: 0;
  &:hover {
    color: ${({ theme }) => theme.blue100};
    &:after {
      transform: scaleX(1);
    }
  }
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 30px;
    height: 2px;
    background-color: ${({ theme }) => theme.blue100};
    transition: 0.3s;
    transform: scaleX(0);
    transform-origin: 0 50%;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.blue100};
      &:after {
        transform: scaleX(1);
      }
    `}
    ${({ theme }) => theme.mq.md} {
      display: block;
    }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  transition: 0.3s;
`;

const Navbar = () => {
  const { activeLink, isTransparent } = useContext(NavigationContext);
  const wrapperRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;

    if (list) {
      const listItems = list.children;
      gsap.fromTo(
        listItems,
        { y: -50, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.1,
          ease: 'power3.inOut',
          duration: 1,
        }
      );
    }
  }, []);

  return (
    <Wrapper ref={wrapperRef} isActive={!isTransparent}>
      <Content>
        <InnerWrapper>
          <LogoWrapper to="/">
            <LogoInnerWrapper>
              <Logo src={logoImg} alt="logo" />
            </LogoInnerWrapper>
            <Title>
              Tobiasz
              <br />
              Maj
            </Title>
          </LogoWrapper>
          <List ref={listRef}>
            <ListItem isActive={activeLink === 'home'}>
              <StyledLink to="#home">Home</StyledLink>
            </ListItem>
            <ListItem isActive={activeLink === 'technologies'}>
              <StyledLink to="#technologies">Technologies</StyledLink>
            </ListItem>
            <ListItem isActive={activeLink === 'portfolio'}>
              <StyledLink to="#portfolio">Portfolio</StyledLink>
            </ListItem>
            <ListItem isActive={activeLink === 'contact'}>
              <StyledLink to="#contact">Contact</StyledLink>
            </ListItem>
          </List>
          <MenuBtn />
        </InnerWrapper>
      </Content>
    </Wrapper>
  );
};

export default Navbar;