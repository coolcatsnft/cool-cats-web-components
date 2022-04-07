import React from 'react';
import { MilkValue } from './MilkValue';

export default {
  title: 'MilkValue',
  component: MilkValue,
  argTypes: {
    size: {
      control: "select",
      options: ["", "tiny", "normal", "large"],
      defaultValue: "",
      name: "Size"
    }
  }
}

export const Basic = ((args) => {
  return (
    <MilkValue {...args}>3,000</MilkValue>
  )
}).bind({});