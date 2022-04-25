import React from 'react';
import { getColours, getSizes } from '../../utils';
import { ButtonIncrement } from './ButtonIncrement';

export default {
  title: 'Form/ButtonIncrement',
  component: ButtonIncrement,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    size: {
      control: "select",
      options: getSizes(),
      defaultValue: "",
      name: "Size"
    },
    colour: {
      control: "select",
      options: getColours(),
      defaultValue: "default",
      name: "Colour"
    },
    label: {
      control: "text",
      defaultValue: "Purchase"
    }
  }
}

export const Example = ((args) => {
  return (
    <ButtonIncrement {...args} incrementProps={ { min: 1, max: 3 } } buttonProps={ { label: args.label } } />
  )
}).bind({});
