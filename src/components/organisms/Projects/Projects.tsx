import React from 'react';
import styled from 'styled-components';
import Content from 'components/atoms/Content/Content';
import SectionHeader from 'components/molecules/SectionHeader/SectionHeader';
import Project from 'components/organisms/Projects/Project';

const Wrapper = styled.section`
  position: relative;
  padding: 50px 0;
  background-color: ${({ theme }) => theme.white};
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    clip-path: polygon(100% 88%, 0 100%, 100% 100%);
    background: ${({ theme }) => theme.darkGradient};
  }
`;

const InnerWrapper = styled.div`
  ${({ theme }) => theme.mq.s} {
    padding: 50px 20px 50px 40px;
  }
`;

const Projects = () => {
    return (
        <Wrapper id="projects">
            <Content>
                <SectionHeader
                    lineColor="dark"
                    title="My Projects"
                    paragraph="I've been bla bla. Below are some of my favourites. "
                />
                <InnerWrapper>
                    <Project />
                    <Project right />
                </InnerWrapper>
            </Content>
        </Wrapper>
    );
};

export default Projects;