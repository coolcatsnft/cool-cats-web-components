import React from 'react';
import { Header } from './Header';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    size: {
      control: { type: 'number', min: 1, max: 5 },
      defaultValue: 1
    }
  }
}

export const Basic = ((args) => {
  return (
    <Header size={args.size}>A header component</Header>
  )
}).bind({});