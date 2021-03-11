import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import gsap from 'gsap';
import styled from 'styled-components';
import Content from 'components/atoms/Content/Content';
import Button from 'components/atoms/Button/Button';
import Title from 'assets/icons/title.inline.svg';

interface Props {
  readonly isActive: boolean;
}

const Wrapper = styled.header`
  position: relative;
  width: 100%;
  padding: 100px 0;
  background: ${({ theme }) => theme.darkGradient};
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.blue};
    clip-path: polygon(100% calc(100% - 50px), 0% 100%, 100% 100%);
    ${({ theme }) => theme.mq.md} {
      clip-path: polygon(100% calc(100% - 110px), 0% 100%, 100% 100%);
    }
  }
  @media (min-height: 620px) {
    height: 100vh;
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.subFont};
  color: ${({ theme }) => theme.white};
  ${({ theme }) => theme.mq.s} {
    height: 88%;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  ${({ theme }) => theme.mq.s} {
    flex-direction: row;
  }
`;

const LinkWrapper = styled.div`
margin: 10px 0;
  opacity: 0;
  ${({ theme }) => theme.mq.s} {
    margin: 0 20px;
  }
`;

const TitleWrapper = styled.div`
width: 320px;
  height: 200px;
  ${({ theme }) => theme.mq.md} {
    width: 750px;
    height: auto;
  }
  opacity: 0;
`;

const SubTitle = styled.h2`
  display: flex;
  text-align: center;
  line-height: 36px;
  font-size: ${({ theme }) => theme.fontSize.xlg};
  font-weight: ${({ theme }) => theme.regular};
  padding: 5px 0;
  margin-bottom: -40px;
  opacity: 0;
  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: -25px;
  }
`;

const Intro = styled.span`
  white-space: pre;
  display: none;
  ${({ theme }) => theme.mq.xs} {
    display: block;
  }
`;

const Name = styled.span<Props>`
  position: relative;
  white-space: nowrap;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.white};
    transform: ${({ isActive }) => (isActive ? 'scaleX(1)' : 'scaleX(0)')};
    transform-origin: 0 50%;
    transition: 0.3s;
  }
`;

const Header = () => {
  const [isLineActive, setIsLineActive] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subTitleRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subTitle = subTitleRef.current;
    const linksWrapper = linksRef.current;

    if (title && linksWrapper) {
      const links = linksWrapper.children;
      const letters = [...title.querySelectorAll('.letter')];
      const outlines = letters.map(({ children }) => children[0]);
      const tl = gsap.timeline({
        defaults: { ease: 'Power3.easeOut' },
      });

      tl.to(title, { duration: 0.5, autoAlpha: 1 });
      tl.addLabel('start');
      tl.to(
        outlines,
        { duration: 3, strokeDashoffset: 0, stagger: 0.15 },
        'start'
      );
      tl.to(
        letters,
        {
          duration: 1,
          fill: '#ffffff',
          delay: 2.5,
          onComplete: () => setIsLineActive(true),
        },
        'start'
      );
      tl.fromTo(
        subTitle,
        { autoAlpha: 0, y: 50 },
        { duration: 1, y: 0, autoAlpha: 1, delay: 2.5 },
        'start'
      );
      tl.fromTo(
        links,
        { autoAlpha: 0, y: -50 },
        {
          autoAlpha: 1,
          y: 0,
          delay: 4,
          ease: 'Power1.easeOut',
        },
        'start'
      );
    }
  }, []);

  return (
    <Wrapper id="home">
      <Content>
        <InnerWrapper>
          <SubTitle ref={subTitleRef}>
            <Intro>Hey, I'm a </Intro>
            <Name isActive={isLineActive}>Front End Developer</Name>
          </SubTitle>
          <TitleWrapper ref={titleRef}>
            <Title />
          </TitleWrapper>
          <Links ref={linksRef}>
            <LinkWrapper>
              <Button as={Link} to="#projects">
                Projects
              </Button>
            </LinkWrapper>
            <LinkWrapper>
              <Button secondary="true" animated="true" as={Link} to="#contact">
                Contact me
              </Button>
            </LinkWrapper>
          </Links>
        </InnerWrapper>
      </Content>
    </Wrapper>
  );
};

export default Header;