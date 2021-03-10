import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Button from 'components/atoms/Button/Button';
import image from 'assets/images/ecommerce-project.png';
import icon from 'assets/icons/react.svg';

interface ContentProps {
    readonly right?: boolean;
}

interface Props {
    right?: boolean;
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mq.md} {
    flex-direction: row;
    align-items: center;
    padding-bottom: 150px;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url(${image});
  background-size: cover;
  background-position: top;
  transition: 5s;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  ${({ theme }) => theme.mq.s} {
    height: 600px;
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
  ${({ theme }) => theme.mq.md} {
    flex-basis: 65%;
  }
`;

const ImageInnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05), 0 5px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 8px;
  &:hover > ${Image} {
    /* background-position: bottom; */
  }
`;

const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  ${({ theme }) => theme.mq.md} {
    order: ${({ right }) => (right ? '-1' : '1')};
    padding: ${({ right }) => (right ? '0 50px 0 0' : '0 0 0 50px')};
  }
  ${({ theme }) => theme.mq.xl} {
    padding: ${({ right }) => (right ? '0 100px 0 0' : '0 0 0 100px')};
  }
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xxlm};
  ${({ theme }) => theme.mq.s} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

const Description = styled.p`
  font-weight: ${({ theme }) => theme.light};
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 20px 0 0;
  line-height: 22px;
  ${({ theme }) => theme.mq.s} {
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 25px 0 10px;
  }
  ${({ theme }) => theme.mq.md} {
    max-width: 400px;
  }
`;

const ButtonsWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
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
    ${({ theme }) => theme.mq.md} {
      width: 140px;
    }
    ${({ theme }) => theme.mq.lg} {
      width: 180px;
    }
  }
`;

const Technologies = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 360px;
  padding: 20px 0;
`;

const Technology = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.dark200};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 6px 0;
  &:before {
    content: '';
    margin-right: 8px;
    width: 26px;
    height: 26px;
    background: url(${icon}) no-repeat center;
    background-size: 100%;
  }
  ${({ theme }) => theme.mq.s} {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;

const Project = ({ right }: Props) => {
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const image = imageRef.current;
        const content = contentRef.current;

        if (content && image) {
            gsap.from(image, {
                autoAlpha: 0,
                x: right ? -150 : 150,
                scrollTrigger: {
                    trigger: image,
                    start: 'top bottom-=150px',
                },
            });
            gsap.from(content.children, {
                autoAlpha: 0,
                y: -50,
                duration: 0.5,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: content,
                    start: 'top bottom-=150px',
                },
            });
        }
    }, []);

    return (
        <Wrapper>
            <ImageWrapper>
                <ImageInnerWrapper ref={imageRef}>
                    <Image />
                </ImageInnerWrapper>
            </ImageWrapper>
            <Content right={right} ref={contentRef}>
                <Title>Project 1</Title>
                <Description>
                    E-Commerce project made with React for self learning.
        </Description>
                <Technologies>
                    <Technology>Typescript</Technology>
                    <Technology>React</Technology>
                    <Technology>React</Technology>
                    <Technology>React</Technology>
                    <Technology>React</Technology>
                    <Technology>React</Technology>
                    <Technology>React</Technology>
                    <Technology>React</Technology>
                </Technologies>
                <ButtonsWrapper>
                    <LinkWrapper>
                        <Button as="a" href="/" target="_blanket">
                            Live Demo
            </Button>
                    </LinkWrapper>
                    <LinkWrapper>
                        <Button as="a" href="/" target="_blanket" secondary>
                            View Code
            </Button>
                    </LinkWrapper>
                </ButtonsWrapper>
            </Content>
        </Wrapper>
    );
};

export default Project;