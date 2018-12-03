// Libraries
import React from 'react';

// App
import {colors} from 'styles';

// Components
import {Styled} from 'components';

const Title = Styled.H4.extend`
  color: ${colors.purple5};
  font-weight: 600;
  letter-spacing: 1.5;
`;

const Logo = () => (
  <Title>Increment Labs</Title>
);

export default Logo;
