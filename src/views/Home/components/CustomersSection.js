// Libraries
import React from 'react';

// App
import {colors} from 'styles';

// Components
import {Styled} from 'components';

// Assets
import ZeroEx from '../assets/0x.png';
import TrustWallet from '../assets/trust-wallet.png';

const Container = Styled.View.extend`
  align-items: center;
  padding-vertical: 45px;
  background-color: ${colors.white4};
`;

const Title = Styled.H3.extend`
  font-weight: 500;
  font-size: 24px;
  color: ${colors.black3};
`;

const Customers = Styled.View.extend`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

const CustomersSection = () => (
  <Container>
    <Title>Akio is trusted by crypto companies, funds, and enterprises.</Title>
    <Customers>
      <img alt={'0x'} src={ZeroEx} style={{width: 120, marginRight: 25}} />
      <img alt={'TrustWallet'} src={TrustWallet} style={{width: 120, marginLeft: 25}} />
    </Customers>
  </Container>
);

export default CustomersSection;
