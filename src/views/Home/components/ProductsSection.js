// Libraries
import React from 'react';

// App
import {colors} from 'styles';

// Components
import {Styled} from 'components';
import ProductSummary from './ProductSummary';

// Assets
import Avatar from '../assets/avatar.png';
import Chart from '../assets/chart.png';
import Gears from '../assets/gears.png';

const Container = Styled.View.extend`
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  width: 1100px;
  padding-vertical: 100px;
  background-color: ${colors.white16};
`;

const ProductsSection = () => (
  <Container>
    <ProductSummary
      title={'Know Your Users'}
      subtitle={(
        'Automatically turn wallet addresses into full profiles and find ' +
        'out what you don’t know. Build a personalized product users will love.'
      )}
      image={Avatar}
    />
    <ProductSummary
      title={'Easily Gather Insights'}
      subtitle={(
        'Answer any question by deep diving into every smart contract, ' +
        'token, and project. Drop into your infrastructure without wasting time.'
      )}
      image={Chart}
    />
    <ProductSummary
      title={'Build Custom Solutions'}
      subtitle={(
        'Power features that seemed impossible to build before. ' +
        'Use data to create trading signals, APIs, and innovative in-app features.'
      )}
      image={Gears}
    />
  </Container>
);

export default ProductsSection;
