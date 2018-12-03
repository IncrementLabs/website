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
      title={'UI / UX Design'}
      subtitle={(
        'We use the latest tools including Sketch and Invision to create ' +
        'high-quality, responsive applications.'
      )}
      image={Avatar}
    />
    <ProductSummary
      title={'Web Development'}
      subtitle={(
        'We build fast, responsive websites that look and work great on ' +
        'any device. Our applications are used by thousands of users.'
      )}
      image={Chart}
    />
    <ProductSummary
      title={'Mobile Development'}
      subtitle={(
        'Build cross-platform apps easily using our proven development ' +
        'framework. We\'ll also help deploy your app to the app stores.'
      )}
      image={Gears}
    />
  </Container>
);

export default ProductsSection;
