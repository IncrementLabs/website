// Libraries
import React from 'react';

// App
import {colors} from 'styles';

// Components
import {Styled} from 'components';

const Container = Styled.View.extend`
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${colors.purple5};
`;

const Title = Styled.H1.extend`
  color: ${colors.white16};
`;

const Subtitle = Styled.H4.extend`
  margin-top: 5px;
  color: ${colors.white16};
`;

const ComingSoonSection = () => (
  <Container>
    <Title>akiolabs</Title>
    <Subtitle>coming soon</Subtitle>
  </Container>
);

export default ComingSoonSection;
