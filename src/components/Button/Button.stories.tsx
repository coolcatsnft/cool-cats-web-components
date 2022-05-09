import React from 'react';
import { getColours, getSizes } from '../../utils';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    sashed: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    expanded: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    size: {
      control: "select",
      options: getSizes(),
      defaultValue: "normal",
      name: "Size"
    },
    colour: {
      control: "select",
      options: getColours(),
      defaultValue: "default",
      name: "Colour"
    }
  }
}

export const Simple = ((args) => {
  return (
    <Button {...args}>A button</Button>
  )
}).bind({});

export const PromiseButton = ((args) => {
  return (
    <Button {...args} onClick={() => new Promise((res: Function) => { setTimeout(() => { res(); alert('Hello'); }, 3000) }) }>A button</Button>
  )
}).bind({});