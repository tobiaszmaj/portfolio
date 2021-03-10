import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import Content from 'components/atoms/Content/Content';
import SectionHeader from 'components/molecules/SectionHeader/SectionHeader';
import HeroAnimation from 'components/molecules/HeroAnimation/HeroAnimation';
import checkmarkIcon from 'assets/icons/checkmark.svg';

const Wrapper = styled.section`
position: relative;
padding: 50px 0 20px;
background-color: ${({ theme }) => theme.blue};
&:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    clip-path: polygon(0 calc(100% - 50px), 0% 100%, 100% 100%);
    background: ${({ theme }) => theme.white};
    ${({ theme }) => theme.mq.md} {
      clip-path: polygon(0 calc(100% - 90px), 0% 100%, 100% 100%);
    }
  }
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 80px;
  color: ${({ theme }) => theme.white};
  ${({ theme }) => theme.mq.md} {
    padding: 20px 0 80px;
  }
  ${({ theme }) => theme.mq.md} {
    flex-direction: column;
  }
  ${({ theme }) => theme.mq.xl} {
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    padding: 20px 0 120px;
  }
  ${({ theme }) => theme.mq.xxl} {
    padding: 20px 0 60px;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 720px;
`;

const AnimationWrapper = styled.div`
  display: none;
  ${({ theme }) => theme.mq.md} {
    display: block;
    margin: 30px 0;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StyledList = styled(List)`
margin-right: 20px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.light};
  margin: 8px 0;
  &:before {
    content: '';
    display: block;
    width: 22px;
    height: 22px;
    background: url(${checkmarkIcon}) no-repeat center;
    background-size: 100%;
    margin-right: 10px;
  }
  ${({ theme }) => theme.mq.s} {
    font-size: ${({ theme }) => theme.fontSize.xlg};
    &:before {
      width: 28px;
      height: 28px;
    }
  }
`;

const Technologies = () => {
  const list1Ref = useRef<HTMLUListElement>(null);
  const list2Ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const firstList = list1Ref.current;
    const secondList = list2Ref.current;

    if (firstList && secondList) {
      [...firstList.children, ...secondList.children].map(child => {
        gsap.from(child, {
          autoAlpha: 0,
          y: -20,
          scrollTrigger: {
            trigger: child,
            start: 'top bottom-=50px',
          },
        });
      });
    }
  }, []);

  return (
    <Wrapper id="technologies">
      <Content>
        <Main>
          <InnerWrapper>
            <SectionHeader
              title="Technologies"
              paragraph="These are technologies, tools and concepts I use in my projects. I'm currently improving myself in TypeScript and unit testing."
            />
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
          <AnimationWrapper>
            <HeroAnimation />
          </AnimationWrapper>
        </Main>
      </Content>
    </Wrapper>
  );
};

export default Technologies;