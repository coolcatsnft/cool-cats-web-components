import React from 'react';
import { Input } from './Input';

export default {
  title: 'Form/NumberInput',
  component: Input,
  argTypes: {
    placeholder: {
      control: { type: 'number' }
    }
  }
}

export const Basic = ((args) => {
  return (
    <Input name='numberTest' type='number' {...args} />
  )
}).bind({});

export const WithValidation = ((args) => {
  return (
    <Input showError label='Enter a number between 1 and 10' name='numberTest' min={0} max={10} type='number' {...args} />
  )
}).bind({});