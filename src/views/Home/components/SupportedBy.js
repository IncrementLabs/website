// Libraries
import React from 'react';

// App
import {colors} from 'styles';

// Components
import {Styled} from 'components';

// Assets
import BinanceLabs from '../assets/binance-labs.png';

const Container = Styled.View.extend`
`;

const Title = Styled.H6.extend`
  color: ${colors.black3};
`;

const Investors = Styled.View.extend`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const SupportedBy = () => (
  <Container>
    <Title>Supported By</Title>
    <Investors>
      <img alt={'Binance Labs'} src={BinanceLabs} style={{width: 150}} />
    </Investors>
  </Container>
);

export default SupportedBy;
