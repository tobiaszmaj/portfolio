import React from 'react';
import { FluidObject } from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Content from 'components/atoms/Content/Content';
import Anchor from 'components/atoms/Anchor/Anchor';
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
    bottom: 0;
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
    <>
      <Anchor id="projects" />
      <Wrapper id="projects-content">
        <Content>
          <SectionHeader
            lineColor="dark"
            title="My Projects"
            paragraph="I've been bla bla. Below are some of my favourites. "
          />
          <InnerWrapper>
            {allProjectsJson.nodes.map(
              (
                { title, description, technologies, image, demoLink, codeLink },
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
                  right={Boolean(index % 2)}
                />
              )
            )}
          </InnerWrapper>
        </Content>
      </Wrapper>
    </>
  );
};

export default Projects;