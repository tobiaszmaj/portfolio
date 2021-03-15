import React, { useContext } from 'react';
import SEO from 'components/atoms/SEO/SEO';
import Header from 'components/organisms/Header/Header';
import Technologies from 'components/organisms/Technologies/Technologies';
import Projects from 'components/organisms/Projects/Projects';
import Contact from 'components/organisms/Contact/Contact';
import { NavigationContext } from 'contexts/NavigationContext';

const IndexPage = () => {
  const { activeLink } = useContext(NavigationContext);
  const capitalizedActiveLink =
    activeLink.charAt(0).toUpperCase() + activeLink.slice(1);

  return (
    <>
      <SEO title={capitalizedActiveLink} />
      <Header />
      <main>
        <Technologies />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default IndexPage;
