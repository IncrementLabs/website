// Libraries
import React from 'react';
import {withRouter} from 'react-router-dom';

// App
import {colors} from 'styles';

// Components
import {Styled} from 'components';
import RequestForm from './RequestForm';

const Container = Styled.View.extend`
  align-items: center;
  background-color: ${colors.white16};
  padding-bottom: 80px;
`;

const Content = Styled.View.extend`
  flex-direction: row;
  width: 1160px;
`;

const Info = Styled.View.extend`
  margin-top: 150px;
`;

const Title = Styled.H1.extend`
  width: 575px;
  font-weight: 500;
  color: ${colors.black0};
`;

const Subtitle = Styled.H4.extend`
  margin-top: 20px;
  width: 600px;
  font-size: 20px;
  color: ${colors.black3};
`;

const Actions = Styled.View.extend`
  flex-direction: row;
  margin-top: 30px;
`;

const Circle = Styled.View.extend`
  margin-top: -120px;
  margin-left: 35px;
  height: 700px;
  width: 700px;
  border-radius: 350px;
  background-color: ${colors.purple16};
`;

const HeroSection = ({history, children}) => (
  <Container>
    {children}
    <Content>
      <Info>
        <Title>
          {`Grow your business with a powerful web and mobile app`}
        </Title>
        <Subtitle>
          {(
            `Increment Labs is a design and development consultancy that ` +
            `powers your business with custom web and mobile apps.`
          )}
        </Subtitle>
        <Actions>
          <RequestForm />
        </Actions>
      </Info>
      <Circle />
    </Content>
  </Container>
);

export default withRouter(HeroSection);
