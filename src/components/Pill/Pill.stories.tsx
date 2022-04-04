import React from 'react';
import { Pill } from './Pill';

export default {
  title: 'Pill',
  component: Pill,
  argTypes: {
    appear: {
      control: "boolean",
      defaultValue: false
    },
    bordered: {
      control: "boolean",
      defaultValue: false
    },
    disabled: {
      control: "boolean",
      defaultValue: false
    },
    noText: {
      control: "boolean",
      defaultValue: false
    }
  }
}

export const Example = ((args) => {
  return (
    <Pill {...args}>Pill</Pill>
  )
}).bind({});

export const WithImage = ((args) => {
  return (
    <Pill {...args} icon><img src='https://via.placeholder.com/50' />Pill</Pill>
  )
}).bind({});

export const WithImageAndNoText = ((args) => {
  return (
    <Pill {...args} icon><img src='https://via.placeholder.com/50' /></Pill>
  )
}).bind({});