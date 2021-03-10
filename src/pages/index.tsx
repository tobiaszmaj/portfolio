import React from 'react';
import SEO from 'components/atoms/SEO/SEO';
import Header from 'components/organisms/Header/Header';
import Technologies from 'components/organisms/Technologies/Technologies';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Header />
    <main>
      <Technologies />
    </main>
  </>
);

export default IndexPage;
