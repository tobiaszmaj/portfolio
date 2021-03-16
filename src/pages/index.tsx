import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import Header from 'components/organisms/Header/Header';
import Technologies from 'components/organisms/Technologies/Technologies';
import Projects from 'components/organisms/Projects/Projects';
import Footer from 'components/molecules/Footer/Footer';
import Contact from 'components/organisms/Contact/Contact';
import NavigationProvider from 'contexts/NavigationContext';

const IndexPage = () => (
  <NavigationProvider>
    <Navigation />
    <Header />
    <main>
      <Technologies />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </NavigationProvider>
);

export default IndexPage;
