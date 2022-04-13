import React from 'react';
import { getSizes } from '../../utils';
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
      options: ["default", "orange", "red", "green", "pale-green", "pink", "light-blue", "simple-yellow", "yellow", "grey", "white", "black", "opensea", "disabled", "listed", "purchase", "selected", "error", "warning", "success", "info", "fire", "water", "grass", "air", "common", "uncommon", "rare", "epic", "legendary", "cool_1", "cool_2", "wild_1", "wild_2", "classy_1", "classy_2", "exotic_1", "exotic_2"],
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