// Libraries
import React from 'react';

// App
import {colors} from 'styles';

// Components
import {Footer, Header, Styled} from 'components';
import {Page} from 'views/App/components';
import {HeroSection, JoinSection, ProductFeature, ProductSection, ProductsSection} from './components';

// Assets
import Profile from './assets/profile.png';
import Insights from './assets/insights.png';
import Custom from './assets/custom.png';

const Italic = Styled.Text.extend`
  font-style: italic;
`;

const HomePage = () => (
  <Page>
    <HeroSection>
      <Header showLinks />
    </HeroSection>
    <ProductsSection />
    <ProductSection
      id={'profiles'}
      align={'left'}
      color={colors.white4}
      title={'Know Your Users'}
      link={null}
      image={<img alt={'User Profile'} src={Profile} style={{width: 400, marginRight: 140}} />}>
      <ProductFeature
        title={'Find out what you don’t know'}
        subtitle={(
          <React.Fragment>
            {'Learn who your users truly are. '}
            <Italic>Risk Score, Is Bot, Dump Probability, KYC Verified,</Italic>
            {' and more.'}
          </React.Fragment>
        )}
      />
      <ProductFeature
        title={'Personalize your product experience'}
        subtitle={(
          'Enrich the profiles with off-chain metadata such as location ' +
          'and social links. Personalize your app with users’ histories.'
        )}
      />
    </ProductSection>
    <ProductSection
      id={'insights'}
      align={'right'}
      color={colors.white16}
      title={'Easily Gather Insights'}
      link={null}
      image={<img alt={'Dashboards'} src={Insights} style={{width: 625, marginLeft: 15}} />}>
      <ProductFeature
        title={'Deep dive into every smart contract, token, and project'}
        subtitle={(
          'Uncover every detail such as user adoption, liquidity, or growth ' +
          'potential so you can make the best decisions.'
        )}
      />
      <ProductFeature
        title={'Flexibly fit with minimal engineering effort'}
        subtitle={(
          'Use clean data from events and internal function calls. ' +
          'Push anywhere into your existing tech stack. No ABIs necessary.'
        )}
      />
    </ProductSection>
    <ProductSection
      id={'api'}
      align={'left'}
      color={colors.white4}
      title={'Build Custom Solutions'}
      link={null}
      image={<img alt={'Custom Solutions'} src={Custom} style={{width: 566, marginRight: 54}} />}>
      <ProductFeature
        title={'Power features that seemed impossible'}
        subtitle={(
          'Use APIs that simplify the blockchain. Improve UX with ' +
          'real-time notifications, webhooks, and all blockchain data.'
        )}
      />
      <ProductFeature
        title={'Focus on building what’s important'}
        subtitle={(
          'Develop trading signals, dashboards, or risk models using ' +
          'Akio. Deploy on your own or host and scale with us too.'
        )}
      />
    </ProductSection>
    <JoinSection />
    <Footer showLinks />
  </Page>
);

export default HomePage;
