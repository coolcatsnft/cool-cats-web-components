import React from 'react';
import { Alert, AlertText } from './Alert';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    visible: {
      control: { type: 'boolean' },
      defaultValue: true
    },
    fixed: {
      control: { type: 'boolean' },
      defaultValue: true
    }
  }
}

export const Example = ((args) => {
  return (
    <Alert {...args}><AlertText>An Alert</AlertText></Alert>
  )
}).bind({});

export const ExampleWithImage = ((args) => {
  return (
    <Alert {...args}><img src="https://via.placeholder.com/150" /><AlertText><span>An Alert</span>With image</AlertText></Alert>
  )
}).bind({});