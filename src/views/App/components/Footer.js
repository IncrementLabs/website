// Libraries
import React from 'react';

// App
import {colors} from 'styles';

// Components
import {Styled} from 'components';

const Container = Styled.View.extend`
  align-items: center;
  background-color: ${colors.white4};
`;

const Content = Styled.View.extend`
  margin-top: 80px;
  width: 1120px;
`;

const Line = Styled.View.extend`
  margin-top: 90px;
  height: 1px;
  background-color: ${colors.gray12};
`;

const Info = Styled.View.extend`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-vertical: 50px;
`;

const Copyright = Styled.H6.extend`
  color: ${colors.gray12};
`;

const Footer = () => (
  <Container>
    <Content>
      <Line />
      <Info>
        <Copyright>{`© 2018 Increment Labs`}</Copyright>
      </Info>
    </Content>
  </Container>
);

export default Footer;
