import React from 'react';
import { RarityBadge } from './RarityBadge';

export default {
  title: 'RarityBadge',
  component: RarityBadge,
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 10 },
      defaultValue: 3
    },
    label: {
      control: "select",
      options: ["Cool", "Wild", "Classy", "Exotic"],
      defaultValue: "Cool",
      name: "Label"
    }
  }
}

export const Example = ((args) => {
  return (
    <RarityBadge {...args}>
      <span>{ args.value }</span>
    </RarityBadge>
  )
}).bind({});
