// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// Components
import {Styled} from 'components';

const Container = Styled.View.extend`
  flex: 1;
  min-width: 1300px;
`;

const Content = Styled.View.extend`
  flex: 1;
`;

const Page = ({title, description, children}) => (
  <Container>
    <Helmet
      title={title}
      meta={[{
        name: 'viewport',
        content: '',
      }, {
        name: 'google-site-verification',
        content: '',
      }, {
        name: 'description',
        content: description,
      }, {
        name: 'keywords',
        content: [
          // TODO
        ].join(', '),
      }]}
    />
    <Content>
      {children}
    </Content>
  </Container>
);

Page.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Page.defaultProps = {
  title: 'Increment Labs - Web and Mobile App Development',

  // TODO
  description: '',
};

export default Page;
