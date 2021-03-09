import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import Content from 'components/atoms/Content/Content';
import LandingImage from 'components/molecules/LandingImage/LandingImage';
import checkmarkIcon from 'assets/icons/checkmark.svg';

interface Props {
  readonly isActive: boolean;
}

const Wrapper = styled.section`
position: relative;
padding: 50px 0;
background-color: ${({ theme }) => theme.blue};
&:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    clip-path: polygon(0 88%, 0 100%, 100% 100%);
    background: ${({ theme }) => theme.white};
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0 150px;
  color: ${({ theme }) => theme.white};
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInnerWrapper = styled(InnerWrapper)`
  margin: 10px 0 20px;
`;

const ListsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Heading = styled.h2<Props>`
  position: relative;
  padding-bottom: 15px;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 150px;
    height: 4px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 100px;
    transition: 0.3s;
    transform-origin: 0 50%;
    transform: ${({ isActive }) => (isActive ? 'scaleX(1)' : 'scaleX(0)')};
  }
`;

const Paragraph = styled.p`
padding: 20px 0 30px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.light};
  line-height: 24px;
  max-width: 640px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StyledList = styled(List)`
  margin-right: 100px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xlg};
  font-weight: ${({ theme }) => theme.light};
  margin: 8px 0;
  &:before {
    content: '';
    display: block;
    width: 28px;
    height: 28px;
    background: url(${checkmarkIcon}) no-repeat center;
    background-size: 100%;
    margin-right: 10px;
  }
`;

const Technologies = () => {
  const [isLineActive, setIsLineActive] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const list1Ref = useRef<HTMLUListElement>(null);
  const list2Ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const firstList = list1Ref.current;
    const secondList = list2Ref.current;

    if (header && firstList && secondList) {
      gsap.set([header, firstList, secondList], { autoAlpha: 0 });

      const tl = gsap.timeline({
        defaults: { ease: 'power3.inOut' },
        scrollTrigger: {
          trigger: header,
        },
      });

      tl.to([header, firstList, secondList], { autoAlpha: 1 });
      tl.from(header.children, {
        autoAlpha: 0,
        x: -30,
        stagger: 0.3,
        onComplete: () => setIsLineActive(true),
      });
      tl.from([firstList.children, secondList.children], {
        autoAlpha: 0,
        y: -20,
        stagger: 0.05,
      });
    }
  }, []);

  return (
    <Wrapper id="technologies">
      <Content>
        <Main>
          <InnerWrapper>
            <StyledInnerWrapper ref={headerRef}>
              <Heading isActive={isLineActive}>Technologies</Heading>
              <Paragraph>
                These are technologies, tools and concepts I use in my projects.
                I'm currently improving myself in TypeScript and unit testing.
              </Paragraph>
            </StyledInnerWrapper>
            <ListsWrapper>
              <StyledList ref={list1Ref}>
                <ListItem>HTML5</ListItem>
                <ListItem>CSS3</ListItem>
                <ListItem>Sass/SCSS</ListItem>
                <ListItem>BEM</ListItem>
                <ListItem>Mobile First</ListItem>
                <ListItem>JavaScript ES6+</ListItem>
                <ListItem>TypeScript</ListItem>
                <ListItem>React & Hooks</ListItem>
                <ListItem>Redux</ListItem>
                <ListItem>Gatsby</ListItem>
                <ListItem>GraphQL</ListItem>
              </StyledList>
              <List ref={list2Ref}>
                <ListItem>Jest</ListItem>
                <ListItem>React Testing Library</ListItem>
                <ListItem>GSAP</ListItem>
                <ListItem>Framer Motion</ListItem>
                <ListItem>CSS Modules</ListItem>
                <ListItem>Styled Components</ListItem>
                <ListItem>Storybook</ListItem>
                <ListItem>Formik & Yup</ListItem>
                <ListItem>Atomic design</ListItem>
                <ListItem>Axios</ListItem>
                <ListItem>Git</ListItem>
              </List>
            </ListsWrapper>
          </InnerWrapper>
          <LandingImage />
        </Main>
      </Content>
    </Wrapper>
  );
};

export default Technologies;