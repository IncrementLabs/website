// Libraries
import React from 'react';

// App
import {colors} from 'styles';

// Components
import {Link, Styled} from 'components';

const Container = Styled.View.extend`
  align-items: center;
  background-color: ${colors.white4};
`;

const Content = Styled.View.extend`
  margin-top: 80px;
  width: 1120px;
`;

const Row = Styled.View.extend`
  flex-direction: row;
`;

const Column = Styled.View.extend`
  width: 150px;
`;

const Header = Styled.H6.extend`
  margin-bottom: 20px;
  font-weight: 600;
  color: ${colors.gray9};
  letter-spacing: 2;
`;

const Item = Styled.View.extend`
  margin-bottom: 10px;
`;

const Text = Styled.H6.extend`
  color: ${colors.gray9};
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

const Links = Styled.View.extend`
  flex-direction: row;
  align-items: center;
`;

const RowItem = Styled.View.extend`
  margin-left: 20px;
`;

const Footer = ({showLinks}) => (
  <Container>
    <Content>
      {showLinks && (
        <Row>
          <Column>
            <Header>PRODUCT</Header>
            <Item><Link to={'/#profiles'}><Text>Profiles</Text></Link></Item>
            <Item><Link to={'/#insights'}><Text>Insights</Text></Link></Item>
            <Item><Link to={'/#api'}><Text>API</Text></Link></Item>
          </Column>
        </Row>
      )}
      <Line />
      <Info>
        <Copyright>{`© 2018 Akio Labs`}</Copyright>
        <Links>
          <RowItem><Link to={'/terms'}><Text>Terms</Text></Link></RowItem>
          <RowItem><Link to={'/privacy'}><Text>Privacy</Text></Link></RowItem>
        </Links>
      </Info>
    </Content>
  </Container>
);

export default Footer;
