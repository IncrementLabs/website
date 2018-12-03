// Libraries
import React from 'react';

// Components
import {Page, Redirect} from 'components';

const NotFoundPage = () => (
  <Page>
    <Redirect to={'/'} />
  </Page>
);

export default NotFoundPage;
