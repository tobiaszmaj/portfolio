import React from 'react';
import { FluidObject } from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import Content from 'components/atoms/Content/Content';
import SectionHeader from 'components/molecules/SectionHeader/SectionHeader';
import Project from 'components/organisms/Projects/Project';

interface QueryProps {
  allProjectsJson: {
    nodes: [
      {
        title: string;
        description: string;
        demoLink: string;
        codeLink: string;
        withServer: boolean;
        technologies: {
          name: string;
          icon: {
            publicURL: string;
          };
        }[];
        image: {
          childImageSharp: {
            fluid: FluidObject;
          };
        };
      }
    ];
  };
}

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
    bottom: -1px;
    background: ${({ theme }) => theme.darkGradient};
    clip-path: polygon(100% calc(100% - 50px), 0% 100%, 100% 100%);
    ${({ theme }) => theme.mq.md} {
      clip-path: polygon(100% calc(100% - 110px), 0% 100%, 100% 100%);
    }
  }
`;

const InnerWrapper = styled.div`
overflow: hidden;
  ${({ theme }) => theme.mq.s} {
    padding: 50px 20px 50px 40px;
  }
`;

const Projects = () => {
  const { allProjectsJson } = useStaticQuery<QueryProps>(graphql`
  {
    allProjectsJson(sort: { fields: order }) {
      nodes {
        title
        description
        demoLink
        codeLink
        withServer
        technologies {
          name
          icon {
            publicURL
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 850, maxHeight: 571, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`);

  return (
    <Wrapper id="projects">
      <Element name="projects">
        <Content>
          <SectionHeader
            lineColor="dark"
            title="My Projects"
            paragraph="All of my projects are on GitHub. Most of them are made with React. Below are some of my favorites. Currently I'm keep learning TypeScript and my favorite - Gatsby."
          />
          <InnerWrapper>
            {allProjectsJson.nodes.map(
              (
                {
                  title,
                  description,
                  technologies,
                  image,
                  demoLink,
                  codeLink,
                  withServer,
                },
                index: number
              ) => (
                <Project
                  key={title}
                  title={title}
                  demoLink={demoLink}
                  codeLink={codeLink}
                  description={description}
                  image={image.childImageSharp.fluid}
                  technologies={technologies}
                  withServer={withServer}
                  right={Boolean(index % 2)}
                />
              )
            )}
          </InnerWrapper>
        </Content>
      </Element>
    </Wrapper>
  );
};

export default Projects;