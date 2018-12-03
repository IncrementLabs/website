// Libraries
import React from 'react';

// App
import {colors} from 'styles';

// Components
import {Styled} from 'components';

// Assets
import BinanceLabs from '../assets/binance-labs.png';

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

const Investors = Styled.View.extend`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

const InvestorsSection = () => (
  <Container>
    <Title>Akio is supported by:</Title>
    <Investors>
      <img alt={'Binance Labs'} src={BinanceLabs} style={{width: 200}} />
    </Investors>
  </Container>
);

export default InvestorsSection;
