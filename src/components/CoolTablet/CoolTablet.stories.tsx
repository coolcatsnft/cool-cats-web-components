import React from 'react';
import { CoolTablet } from './CoolTablet';

export default {
  title: 'CoolTablet',
  component: CoolTablet,
  argTypes: {
    open: {
      control: { type: 'boolean' },
      defaultValue: true
    }
  }
}

export const CoolTabletExample = ((args) => {
  return (
    <CoolTablet {...args} />
  )
}).bind({});