import React from 'react';
import { ErrorMessage } from './ErrorMessage';

export default {
  title: 'ErrorMessage',
  component: ErrorMessage
}

export const Example = (() => {
  return (
    <ErrorMessage>A basic error message</ErrorMessage>
  )
}).bind({});