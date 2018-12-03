// Libraries
import React from 'react';

// App
import {colors} from 'styles';

// Components
import {Styled} from 'components';
import {Footer, Header, Page} from 'views/App/components';
import {HeroSection, JoinSection, ProductFeature, ProductSection, ProductsSection} from './components';

// Assets
import Profile from './assets/profile.png';
import Insights from './assets/insights.png';

const Italic = Styled.Text.extend`
  font-style: italic;
`;

const HomePage = () => (
  <Page>
    <HeroSection>
      <Header />
    </HeroSection>
    <ProductsSection />
    <ProductSection
      id={'profiles'}
      align={'left'}
      color={colors.white4}
      title={'Experience'}
      link={null}
      image={<img alt={'User Profile'} src={Profile} style={{width: 400, marginRight: 140}} />}>
      <ProductFeature
        title={'From funded startups to proven enterprises'}
        subtitle={(
          'Our team has experience developing custom mobile and web apps that scale.'
        )}
      />
      <ProductFeature
        title={'We use the latest technologies'}
        subtitle={(
          'Our clients expect apps built using modern standards. We use ' +
          'battle-tested technologies that last.'
        )}
      />
    </ProductSection>
    <ProductSection
      id={'insights'}
      align={'right'}
      color={colors.white16}
      title={'Process'}
      link={null}
      image={<img alt={'Dashboards'} src={Insights} style={{width: 625, marginLeft: 15}} />}>
      <ProductFeature
        title={'From product discovery to final launch'}
        subtitle={(
          'Our team will work with you to fully understand your company\'s ' +
          'goals. This drives all decisions from start to finish.'
        )}
      />
      <ProductFeature
        title={'Design and development sprints'}
        subtitle={(
          'We iterate on the product quickly and often so that problems are ' +
          'fixed early on in the product lifecycle.'
        )}
      />
    </ProductSection>
    <JoinSection />
    <Footer />
  </Page>
);

export default HomePage;
