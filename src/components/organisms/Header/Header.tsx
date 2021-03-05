import React from 'react';
import styled from 'styled-components';
import Content from 'components/atoms/Content/Content';

const Wrapper = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.darkGradient};
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    clip-path: polygon(100% 88%, 0 100%, 100% 100%);
    background: ${({ theme }) => theme.blue};
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 88%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
    return (
        <Wrapper id="home">
            <Content>
                <InnerWrapper>
                    <h1>Welcome</h1>
                </InnerWrapper>
            </Content>
        </Wrapper>
    );
};

export default Header;