import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import SEO from 'components/atoms/SEO/SEO';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.darkGradient};
`;

const StyledTitle = styled.h1`
  font-weight: ${({ theme }) => theme.semiBold};
  font-size: ${({ theme }) => theme.fontSize.xxxl};
`;

const StyledHeading = styled.h2`
  margin: 20px 0;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

const StyledButton = styled(Button)`
  width: 300px;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
`;

const NotFound = () => {
  return (
    <Wrapper>
      <SEO title="Not Found" />
      <StyledTitle>404</StyledTitle>
      <StyledHeading>Oops! Page not found :(</StyledHeading>
      <StyledButton as={Link} to="/">
        Homepage
      </StyledButton>
    </Wrapper>
  );
};

export default NotFound;
