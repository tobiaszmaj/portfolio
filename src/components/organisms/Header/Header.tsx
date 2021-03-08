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
  height: 100vh;
  background: ${({ theme }) => theme.darkGradient};
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    clip-path: polygon(100% 88%, 0 100%, 100% 100%);
    background: ${({ theme }) => theme.blue};
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 88%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.subFont};
  color: ${({ theme }) => theme.white};
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const LinkWrapper = styled.div`
  margin: 0 20px;
  opacity: 0;
`;

const TitleWrapper = styled.div`
  opacity: 0;
`;

const SubTitle = styled.h2<Props>`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.regular};
  padding: 5px 0;
  margin-bottom: -25px;
  opacity: 0;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 35%;
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
      tl.to(subTitle, { duration: 1, autoAlpha: 1, delay: 2.5 }, 'start');
      tl.fromTo(
        links,
        { autoAlpha: 0, y: -50 },
        {
          duration: 1,
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
          <SubTitle isActive={isLineActive} ref={subTitleRef}>
            Hey, I'm a Front End Developer
          </SubTitle>
          <TitleWrapper ref={titleRef}>
            <Title />
          </TitleWrapper>
          <Links ref={linksRef}>
            <LinkWrapper>
              <Button as={Link} to="#portfolio">
                Portfolio
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