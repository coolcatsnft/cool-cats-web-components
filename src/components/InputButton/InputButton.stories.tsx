import React from 'react';
import { getSizes } from '../../utils';
import { InputButton } from './InputButton';

export default {
  title: 'Form/InputButton',
  component: InputButton,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    required: {
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
    },
    label: {
      control: "text",
      defaultValue: "An input button",
      name: "Label"
    },
    placeholder: {
      control: "text",
      defaultValue: "",
      name: "Placeholder"
    }
  }
}

export const Simple = ((args) => {
  const buttonArgs = {
    disabled: args.disabled, 
    sashed: args.sashed, 
    size: args.size, 
    colour: args.colour, 
    label: args.label
  };

  const inputArgs = {
    name: "test",
    disabled: args.disabled,
    size: args.size, 
    required: args.required, 
    placeholder: args.placeholder
  };
  return (
    <InputButton input={inputArgs} button={buttonArgs} />
  )
}).bind({});

export const Number = ((args) => {
  const buttonArgs = {
    disabled: args.disabled, 
    sashed: args.sashed, 
    size: args.size, 
    colour: args.colour, 
    label: args.label
  };

  const inputArgs = {
    name: "test",
    type: "number",
    disabled: args.disabled,
    size: args.size, 
    placeholder: args.placeholder,
    required: args.required, 
    min: 0,
    max: 9999
  };
  return (
    <InputButton input={inputArgs} button={buttonArgs} />
  )
}).bind({});
