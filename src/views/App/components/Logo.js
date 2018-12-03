// Libraries
import React from 'react';

// App
import {colors} from 'styles';

// Components
import {Styled} from 'components';

const Title = Styled.H2.extend`
  font-weight: 600;
  color: ${colors.purple5};
  letter-spacing: 2;
`;

const Logo = () => (
  <Title>Increment Labs</Title>
);

export default Logo;
