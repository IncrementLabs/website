// Libraries
import React from 'react';

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

const Header = () => (
  <Container>
    <Content>
      <Links>
        <Link to={'/'}><Logo /></Link>
      </Links>
    </Content>
  </Container>
);

export default Header;
