import React from 'react';
import SEO from 'components/atoms/SEO/SEO';
import Header from 'components/organisms/Header/Header';
import Technologies from 'components/organisms/Technologies/Technologies';
import Projects from 'components/organisms/Projects/Projects';
import Contact from 'components/organisms/Contact/Contact';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Header />
    <main>
      <Technologies />
      <Projects />
      <Contact />
    </main>
  </>
);

export default IndexPage;
