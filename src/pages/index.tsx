import React, { useContext } from 'react';
import SEO from 'components/atoms/SEO/SEO';
import Navigation from 'components/organisms/Navigation/Navigation';
import Header from 'components/organisms/Header/Header';
import Technologies from 'components/organisms/Technologies/Technologies';
import Projects from 'components/organisms/Projects/Projects';
import Footer from 'components/molecules/Footer/Footer';
import Contact from 'components/organisms/Contact/Contact';
import { NavigationContext } from 'contexts/NavigationContext';

const IndexPage = () => {
  const { activeLink } = useContext(NavigationContext);
  const capitalizedActiveLink =
    activeLink.charAt(0).toUpperCase() + activeLink.slice(1);

  return (
    <>
      <SEO title={capitalizedActiveLink} />
      <Navigation />
      <Header />
      <main>
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
