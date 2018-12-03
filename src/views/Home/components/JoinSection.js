// Libraries
import React from 'react';

// App
import {colors} from 'styles';

// Components
import {Styled} from 'components';
import RequestForm from './RequestForm';

const Container = Styled.View.extend`
  align-items: center;
  padding-vertical: 100px;
  background-color: ${colors.white4};
`;

const Title = Styled.H1.extend`
  font-weight: 500;
  color: ${colors.black0};
`;

const Subtitle = Styled.H4.extend`
  margin-top: 5px;
  font-size: 20px;
  color: ${colors.black3};
`;

const Actions = Styled.View.extend`
  margin-top: 30px;
`;

const JoinSection = () => (
  <Container>
    <Title>Want to work with us?</Title>
    <Subtitle>Join the companies using Increment Labs</Subtitle>
    <Actions>
      <RequestForm />
    </Actions>
  </Container>
);

export default JoinSection;
