import React from 'react';
import { Plural } from './Plural';

export default {
  title: 'Plural',
  component: Plural,
  argTypes: {
    count: {
      control: { type: 'number' },
      defaultValue: 1
    }
  }
}

export const Basic = ((args) => {
  return (
    <Plural count={args.count} single='String shown when count is 1' plural="String shown when count is zero or more than one" />
  )
}).bind({});

export const WithZeroString = ((args) => {
  return (
    <Plural 
      count={args.count} 
      single='String shown when count is 1' 
      plural="String shown when count is more than one" 
      zero="String shown when count is zero" 
    />
  )
}).bind({});