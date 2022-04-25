import React from 'react';
import { Increment } from './Increment';

export default {
  title: 'Form/Increment',
  component: Increment
}

export const Example = (() => {
  return (
    <Increment min={0} max={3} />
  )
}).bind({});

export const WithLabel = (() => {
  return (
    <Increment min={0} max={3} label="Increment" />
  )
}).bind({});
