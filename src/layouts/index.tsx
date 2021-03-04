import React, { ReactNode } from 'react';
import styled from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';

interface Props {
  children: ReactNode;
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
`;

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
