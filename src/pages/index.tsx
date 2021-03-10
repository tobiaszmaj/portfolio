import React from 'react';
import SEO from 'components/atoms/SEO/SEO';
import Header from 'components/organisms/Header/Header';
import Technologies from 'components/organisms/Technologies/Technologies';
import Projects from 'components/organisms/Projects/Projects';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Header />
    <main>
      <Technologies />
      <Projects />
    </main>
  </>
);

export default IndexPage;
