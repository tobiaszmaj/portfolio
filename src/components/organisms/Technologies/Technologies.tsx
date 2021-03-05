import React from 'react';
import styled from 'styled-components';
import Content from 'components/atoms/Content/Content';
import LandingImage from 'components/molecules/LandingImage/LandingImage';

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.blue};
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
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