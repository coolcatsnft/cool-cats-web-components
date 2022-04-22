import React from 'react';
import { ConicNumber } from './ConicNumber';

export default {
  title: 'ConicNumber',
  component: ConicNumber,
  argTypes: {
    value: {
      control: {
        type: 'number',
        min: 2,
        max: 12
      },
      defaultValue: 2
    }
  }
}

export const Example = ((args) => {
  return (
    <ConicNumber {...args} max={12} />
  )
}).bind({});