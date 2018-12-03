// Libraries
import React from 'react';

// App
import {colors} from 'styles';

// Components
import {Styled} from 'components';

const Container = Styled.View.extend`
  margin-top: 20px;
`;

const Title = Styled.H4.extend`
  font-weight: 600;
  color: ${colors.black3};
`;

const Subtitle = Styled.H4.extend`
  margin-top: 5px;
  color: ${colors.black3};
`;

const ProductFeature = ({title, subtitle}) => (
  <Container>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Container>
);

export default ProductFeature;
