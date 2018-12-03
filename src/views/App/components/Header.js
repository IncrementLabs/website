// Libraries
import React from 'react';

// App
import {colors} from 'styles';

// Components
import {Link, Styled} from 'components';
import Logo from './Logo';

const Container = Styled.View.extend`
  height: 70px;
  align-items: center;
  z-index: 100;
`;

const Content = Styled.View.extend`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1160px;
`;

const Links = Styled.View.extend`
  flex-direction: row;
  align-items: center;
`;

const Text = Styled.H7.extend`
  margin-left: 20px;
  font-weight: 400;
  color: ${colors.black0};
`;

const Header = ({showLinks}) => (
  <Container>
    <Content>
      <Links>
        <Link to={'/'}><Logo /></Link>
        {showLinks && (
          <React.Fragment>
            <Link to={'/#profiles'}><Text>Profiles</Text></Link>
            <Link to={'/#insights'}><Text>Insights</Text></Link>
            <Link to={'/#api'}><Text>API</Text></Link>
          </React.Fragment>
        )}
      </Links>
    </Content>
  </Container>
);

export default Header;
