import React from 'react';
import styled from 'styled-components';

interface Props {
    isLineActive: boolean;
    title: string;
    paragraph?: string;
}

interface HeadingProps {
    readonly isActive: boolean;
}

const Heading = styled.h2<HeadingProps>`
  position: relative;
  padding-bottom: 15px;
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
    background-color: ${({ theme }) => theme.white};
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

const SectionHeader = ({ isLineActive, title, paragraph }: Props) => (
    <>
        <Heading isActive={isLineActive}>{title}</Heading>
        <Paragraph>{paragraph}</Paragraph>
    </>
);

export default SectionHeader;