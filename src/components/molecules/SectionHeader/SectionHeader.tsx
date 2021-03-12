import React, { useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { NavigationContext } from 'contexts/NavigationContext';

interface Props {
  title: string;
  paragraph?: string;
  lineColor?: 'dark' | 'white';
}

interface HeadingProps {
  readonly isActive: boolean;
  readonly lineColor?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mq.md} {
    margin: 10px 0 20px;
  }
`;

const Heading = styled.h2<HeadingProps>`
  position: relative;
  padding-bottom: 17px;
  font-size: ${({ theme }) => theme.fontSize.xxlm};
  ${({ theme }) => theme.mq.s} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 150px;
    height: 4px;
    background-color: ${({ lineColor, theme }) =>
    lineColor === 'dark' ? theme.dark200 : theme.white};
    border-radius: 100px;
    transition: 0.3s;
    transform-origin: 0 50%;
    transform: ${({ isActive }) => (isActive ? 'scaleX(1)' : 'scaleX(0)')};
  }
`;

const Paragraph = styled.p`
  padding: 20px 0 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.light};
  line-height: 24px;
  max-width: 750px;
  ${({ theme }) => theme.mq.xs} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  ${({ theme }) => theme.mq.s} {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
  ${({ theme }) => theme.mq.xl} {
    max-width: 640px;
  }
`;

const SectionHeader = ({ lineColor, title, paragraph }: Props) => {
  const { activeLink } = useContext(NavigationContext);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;

    if (header) {
      [...header.children].map(child => {
        gsap.from(child, {
          autoAlpha: 0,
          x: -30,
          scrollTrigger: {
            trigger: child,
            start: 'top bottom-=50px',
          },
        });
      });
    }
  }, []);

  return (
    <Wrapper ref={headerRef}>
      <Heading
        lineColor={lineColor}
        isActive={title.toLowerCase().includes(activeLink)}
      >
        {title}
      </Heading>
      <Paragraph>{paragraph}</Paragraph>
    </Wrapper>
  );
};

export default SectionHeader;