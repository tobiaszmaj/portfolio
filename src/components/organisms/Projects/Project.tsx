import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Image, { FluidObject } from 'gatsby-image';
import gsap from 'gsap';
import Button from 'components/atoms/Button/Button';

interface ContentProps {
  readonly right?: boolean;
}

interface IconProps {
  readonly icon: string;
}

interface Props {
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
  image: FluidObject;
  right: boolean;
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mq.s} {
    padding-bottom: 80px;
  }
  ${({ theme }) => theme.mq.lg} {
    flex-direction: row;
    align-items: center;
    padding-bottom: 150px;
  }
`;

const StyledImage = styled(Image)``;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  ${({ theme }) => theme.mq.s} {
    z-index: 1;
    &:before {
      content: '';
      position: absolute;
      top: -40px;
      left: -40px;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.gray100};
      z-index: -1;
    }
  }
  ${({ theme }) => theme.mq.lg} {
    flex-basis: 65%;
  }
`;

const ImageInnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  transition-property: transform, opacity;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05), 0 5px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 8px;
`;

const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  transition-property: opacity;
  ${({ theme }) => theme.mq.lg} {
    order: ${({ right }) => (right ? '-1' : '1')};
    padding: ${({ right }) => (right ? '0 50px 0 0' : '0 0 0 50px')};
  }
  ${({ theme }) => theme.mq.xl} {
    padding: ${({ right }) => (right ? '0 100px 0 0' : '0 0 0 80px')};
  }
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xxlm};
  transition-property: transform, opacity;
  ${({ theme }) => theme.mq.s} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

const Description = styled.p`
  font-weight: ${({ theme }) => theme.light};
  font-size: ${({ theme }) => theme.fontSize.s};
  transition-property: transform, opacity;
  margin: 20px 0 0;
  line-height: 22px;
  ${({ theme }) => theme.mq.s} {
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 25px 0 10px;
  }
  ${({ theme }) => theme.mq.lg} {
    max-width: 620px;
  }
`;

const ButtonsWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  transition-property: transform, opacity;
  ${({ theme }) => theme.mq.s} {
    flex-direction: row;
  }
`;

const LinkWrapper = styled.div`
  margin-bottom: 10px;
  ${({ theme }) => theme.mq.s} {
    margin-right: 15px;
  }
  & > a {
    width: 100%;
    border-radius: 8px;
    color: ${({ theme }) => theme.white};
    ${({ theme }) => theme.mq.s} {
      width: 220px;
    }
    &:hover {
      border-color: ${({ theme }) => theme.dark200};
      background: ${({ theme }) => theme.dark200};
      color: ${({ theme }) => theme.white};
    }
    ${({ theme }) => theme.mq.lg} {
      width: 180px;
    }
  }
`;

const Technologies = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0 10px;
  padding: 20px 0;
  max-width: 620px;
  transition-property: transform, opacity;
  ${({ theme }) => theme.mq.s} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Technology = styled.div<IconProps>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.dark200};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 7px 0;
  white-space: pre;
  &:before {
    content: '';
    margin-right: 8px;
    width: 22px;
    height: 26px;
    background: url(${({ icon }) => icon}) no-repeat center;
    background-size: 100%;
  }
  ${({ theme }) => theme.mq.s} {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;

const Project = ({
  image,
  title,
  description,
  technologies,
  right,
  demoLink,
  codeLink,
}: Props) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    const content = contentRef.current;

    if (content && image) {
      gsap.from(image, {
        autoAlpha: 0,
        x: right ? '-=150' : '+=150',
        scrollTrigger: {
          trigger: image,
          start: 'top bottom-=200px',
        },
      });
      gsap.from(content.children, {
        autoAlpha: 0,
        y: '-=50',
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: image,
          start: 'top bottom-=200px',
        },
      });
    }
  }, []);

  return (
    <Wrapper>
      <ImageWrapper>
        <ImageInnerWrapper ref={imageRef}>
          <StyledImage fluid={image} alt={title} />
        </ImageInnerWrapper>
      </ImageWrapper>
      <Content right={right} ref={contentRef}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Technologies>
          {technologies.map(({ icon, name }) => (
            <Technology key={name} icon={icon.publicURL}>
              {name}
            </Technology>
          ))}
        </Technologies>
        <ButtonsWrapper>
          <LinkWrapper>
            <Button as="a" href={demoLink} target="_blanket">
              Live Demo
            </Button>
          </LinkWrapper>
          <LinkWrapper>
            <Button as="a" href={codeLink} target="_blanket" secondary>
              View Code
            </Button>
          </LinkWrapper>
        </ButtonsWrapper>
      </Content>
    </Wrapper>
  );
};

export default Project;