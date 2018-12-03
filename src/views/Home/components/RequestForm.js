// Libraries
import React from 'react';
import styled from 'styled-components';

// App
import {colors} from 'styles';

// Components
import {NetlifyForm, Styled} from 'components';

const TextInput = Styled.TextInput.H7.extend`
  width: 300px;
  box-shadow: 0 2px 5px rgba(194,194,194,0.5);
`;

// TODO
const SubmitButton = styled.button`
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(194,194,194,0.5);

  width: 180px;
  margin-left: 10px;
  background-color: ${colors.purple5};
  border-width: 0px;
`;

const SubmitText = Styled.H6.extend`
  font-weight: 600;
  color: ${colors.white16};
  letter-spacing: 1;
`;

const RequestForm = () => (
  <NetlifyForm
    name={'email'}
    action={'/contact/success'}>
    <TextInput
      required
      keyboardType={'email-address'}
      name={'email'}
      placeholder={'Enter your work email'}
    />
    <SubmitButton type={'submit'}>
      <SubmitText>REQUEST DEMO</SubmitText>
    </SubmitButton>
  </NetlifyForm>
);

export default RequestForm;
