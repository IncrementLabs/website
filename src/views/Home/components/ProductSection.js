// Libraries
import React from 'react';

// App
import {colors} from 'styles';

// Components
import {Styled} from 'components';

const Container = Styled.View.extend`
  align-items: center;
  background-color: ${props => props.color};
`;

const Content = Styled.View.extend`
  flex-direction: ${props => props.align === 'left' ? 'row-reverse' : 'row'};
  align-items: center;
  height: 700px;
  width: 1160px;
`;

const Half = Styled.View.extend`
  flex: 1;
`;

const Info = Styled.View.extend`
`;

const Title = Styled.H1.extend`
  font-weight: 500;
  color: ${colors.black0};
`;

const Link = Styled.View.extend`
  margin-top: 10px;
`;

const Image = Styled.View.extend`
  flex: 1;
  align-items: ${props => props.align === 'left' ? 'flex-end' : 'flex-start'};
`;

const ProductSection = ({id, align, color, title, link, image, children}) => (
  <div id={id}>
    <Container color={color}>
      <Content align={align}>
        <Half>
          <Info align={align}>
            <Title>{title}</Title>
            {children}
            <Link>{link}</Link>
          </Info>
        </Half>
        <Image align={align}>
          {image}
        </Image>
      </Content>
    </Container>
  </div>
);

export default ProductSection;
