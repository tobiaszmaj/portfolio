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
    <Technologies />
    <div style={{ height: '1000px' }}></div>
  </>
);

export default IndexPage;
