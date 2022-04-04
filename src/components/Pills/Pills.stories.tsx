import React from 'react';
import { Pills } from './Pills';
import Pill from '../Pill';

export default {
  title: 'Pills',
  component: Pills,
  argTypes: {
    bordered: {
      control: "boolean",
      defaultValue: false
    }
  }
}

export const Example = ((args) => {
  return (
    <Pills {...args}>
      <Pill {...args}>Pill</Pill>
      <Pill {...args}>Pill</Pill>
      <Pill {...args}>Pill</Pill>
    </Pills>
  )
}).bind({});

export const ExampleWithIcons = ((args) => {
  return (
    <Pills {...args}>
      <Pill {...args} icon><i />Pill</Pill>
      <Pill {...args} icon direction='right'><i />Pill</Pill>
    </Pills>
  )
}).bind({});

export const ExampleWithIconsNoText = ((args) => {
  return (
    <Pills {...args}>
      <Pill {...args} colour="transparent" icon noText><img src='https://via.placeholder.com/50' /></Pill>
      <Pill {...args} colour="transparent" icon direction='right' noText><img src='https://via.placeholder.com/50' /></Pill>
    </Pills>
  )
}).bind({});