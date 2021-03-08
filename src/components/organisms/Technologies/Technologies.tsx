import React from 'react';
import styled from 'styled-components';
import Content from 'components/atoms/Content/Content';
import LandingImage from 'components/molecules/LandingImage/LandingImage';

const Wrapper = styled.section`
position: relative;
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

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0 150px;
`;

const Technologies = () => {
    return (
        <Wrapper id="technologies">
            <Content>
                <InnerWrapper>
                    <div>.</div>
                    <LandingImage />
                </InnerWrapper>
            </Content>
        </Wrapper>
    );
};

export default Technologies;