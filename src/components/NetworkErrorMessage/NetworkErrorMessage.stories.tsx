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