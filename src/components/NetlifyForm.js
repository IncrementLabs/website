// Libraries
import React from 'react';

const NetlifyForm = ({name, action, children}) => (
  <form
    data-netlify={'true'}
    name={name}
    method={'POST'}
    action={action}>
    <input type={'hidden'} name={'form-name'} value={name} />
    {children}
  </form>
);

export default NetlifyForm;
