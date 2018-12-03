// Libraries
import React from 'react';

// App
import {colors} from 'styles';

// Components
import {Styled} from 'components';

const Container = Styled.View.extend`
  width: 340px;
`;

const Title = Styled.H4.extend`
  margin-top: 10px;
  font-weight: 600;
  color: ${colors.black3};
`;

const Subtitle = Styled.H6.extend`
  margin-top: 5px;
  color: ${colors.black3};
`;

const ProductSummary = ({title, subtitle, image}) => (
  <Container>
    <img alt={title} src={image} style={{width: 60}} />
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Container>
);

export default ProductSummary;
