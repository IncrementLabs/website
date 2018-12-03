// Libraries
import React from 'react';

// Components
import {Redirect} from 'components';
import {Page} from 'views/App/components';

const NotFoundPage = () => (
  <Page>
    <Redirect to={'/'} />
  </Page>
);

export default NotFoundPage;
