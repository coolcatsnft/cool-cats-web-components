import React from 'react';
import { Dots } from './Dots';

export default {
  title: 'Dots',
  component: Dots,
  argTypes: {
    numberOfDots: {
      control: { 
        type: 'number',
        min: 2,
        max: 12
      },
      defaultValue: 3
    }
  }
}

export const Example = ((args) => {
  return (
    <Dots mod={args.numberOfDots} />
  )
}).bind({});