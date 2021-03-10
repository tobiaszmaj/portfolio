import React, { ReactNode } from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import NavigationProvider from 'contexts/NavigationContext';
import Navigation from 'components/organisms/Navigation/Navigation';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavigationProvider>
        <Navigation />
        {children}
      </NavigationProvider>
    </ThemeProvider>
  );
};

export default Layout;
