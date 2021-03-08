import React from 'react';
import SEO from 'components/atoms/SEO/SEO';
import Header from 'components/organisms/Header/Header';
import Navbar from 'components/organisms/Navbar/Navbar';
import Technologies from 'components/organisms/Technologies/Technologies';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Navbar />
    <Header />
    <main>
      <Technologies />
    </main>
  </>
);

export default IndexPage;
