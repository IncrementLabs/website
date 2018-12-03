// Libraries
import React from 'react';

// Components
import {Footer, Header, Page} from 'views/App/components';
import {HeroSection, JoinSection, ProductsSection} from './components';

const HomePage = () => (
  <Page>
    <HeroSection>
      <Header />
    </HeroSection>
    <ProductsSection />
    <JoinSection />
    <Footer />
  </Page>
);

export default HomePage;
