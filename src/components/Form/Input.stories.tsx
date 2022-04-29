import React from 'react';
import { getSizes } from '../../utils';
import { Input}  from './Input';

export default {
  title: 'Form/TextInput',
  component: Input,
  argTypes: {
    placeholder: {
      control: { type: 'text' }
    },
    size: {
      control: "select",
      options: getSizes(),
      defaultValue: "normal",
      name: "Size"
    }
  }
}

export const BasicText = ((args) => {
  return (
    <Input name='test' label="Basic Input" {...args} />
  )
}).bind({});

export const BasicDisabledText = ((args) => {
  return (
    <Input name='test' label="Basic Disabled Input" {...args} disabled/>
  )
}).bind({});

export const BasicRequiredText = ((args) => {
  return (
    <Input name='test' label="Basic Required Text" {...args} required />
  )
}).bind({});


export const BasicTextWithValidation = ((args) => {
  return (
    <Input name='test' label="Basic Input" {...args} errorMessage="Required"/>
  )
}).bind({});

export const BasicNumber = ((args) => {
  return (
    <Input name='number field' label="Number" type="number" min={0} max={10} {...args} />
  )
}).bind({});

export const Textarea = ((args) => {
  return (
    <Input name='textarea' label='Text area' type='textarea' {...args} max={250}/>
  )
}).bind({});
