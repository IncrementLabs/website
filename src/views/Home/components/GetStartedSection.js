// Libraries
import React from 'react';
import {withRouter} from 'react-router-dom';

// App
import {colors} from 'styles';

// Components
import {Styled} from 'components';

const Container = Styled.View.extend`
  align-items: center;
`;

const Content = Styled.View.extend`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1120px;
  padding-vertical: 70px;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${colors.gray12};
`;

const Info = Styled.View.extend`
`;

const Ready = Styled.H3.extend`
  font-weight: 500;
  color: ${colors.purple5};
`;

const Talk = Styled.H4.extend`
  margin-top: 5px;
  font-weight: 500;
  color: ${colors.gray8};
`;

const Actions = Styled.View.extend`
  flex-direction: row;
  align-items: center;
`;

const ExploreButton = Styled.Button.extend`
  width: 160px;
  background-color: ${colors.purple5};
`;

const ExploreText = Styled.H6.extend`
  font-weight: 600;
  color: ${colors.white16};
`;

const ContactButton = Styled.Button.extend`
  margin-left: 20px;
  width: 140px;
  background-color: ${colors.white16};
`;

const ContactText = Styled.H6.extend`
  font-weight: 600;
  color: ${colors.purple5};
`;

const GetStartedSection = ({history}) => (
  <Container>
    <Content>
      <Info>
        <Ready>Ready to get started?</Ready>
        <Talk>Let's talk about how Akio can help you with your blockchain data.</Talk>
      </Info>
      <Actions>
        <ExploreButton
          onPress={() => history.push('/contact')}>
          <ExploreText>EXPLORE</ExploreText>
        </ExploreButton>
        <ContactButton
          onPress={() => history.push('/contact')}>
          <ContactText>CONTACT US</ContactText>
        </ContactButton>
      </Actions>
    </Content>
  </Container>
);

export default withRouter(GetStartedSection);
