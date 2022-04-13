import React from 'react';
import { getSizes } from '../../utils';
import { Input } from './Input';

export default {
  title: 'Form/CheckboxInput',
  component: Input
}

export const Basic = ((args) => {
  return (
    <Input name='checkbox' type='checkbox' label='Tick box example' {...args} />
  )
}).bind({});

export const Sizes = ((args) => {
  return (
    <>
      { getSizes().map((size: string) => {
        return (
          <Input key={size} size={size} name={size} type='checkbox' label={`${size} tick box`} {...args} />
        )
      }) }
    </>
  )
}).bind({});

export const Radio = ((args) => {
  return (
    <Input name='radio' type='radio' label='Radio button example' {...args} />
  )
}).bind({});

export const RadioGroup = ((args) => {
  return (
    <>
      <Input name='radio' id='radio1' type='radio' label='Radio button example' {...args} />
      <Input name='radio' id='radio2' type='radio' label='Radio button example' {...args} />
    </>
  )
}).bind({});
