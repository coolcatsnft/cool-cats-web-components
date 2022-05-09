import React from 'react';
import { NetworkErrorMessage } from './NetworkErrorMessage';

export default {
  title: 'NetworkErrorMessage',
  component: NetworkErrorMessage,
  argTypes: {
    networkId: {
      control: "select",
      options: ["1", "3", "4", "5", "42", "localhost"],
      defaultValue: "1",
      name: "Network ID"
    }
  }
}

export const Example = ((args) => {
  return (
    <NetworkErrorMessage {...args} />
  )
}).bind({});

export const ButtonExample = ((args) => {
  return (
    <NetworkErrorMessage onClick={() => alert('Hello')} {...args} />
  )
}).bind({});

export const ButtonPromiseExample = ((args) => {
  return (
    <NetworkErrorMessage onClick={() => new Promise((res: Function) => { setTimeout(() => { console.log('test'); res() }, 3000) }) } {...args} />
  )
}).bind({});