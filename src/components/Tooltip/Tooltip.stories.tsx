import React from 'react';
import Tooltip from './index';
import { Button } from '../index';
import { defaultOptions } from './Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {
    placement: {
      control: "select",
      defaultValue: "top",
      options: ['top', 'left', 'right', 'bottom']
    },
    offsetOptions: {
      control: "number",
      defaultValue: 5
    }
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    )
  ]
}


export const WithHtmlLabel = ((args) => {
  const label = <div><h1>label</h1></div>
  return (
    <Tooltip label={label} options={args}>
      <Button>le' tooltip</Button>
    </Tooltip>
  )
}).bind({})

export const TooltipOnClick = ((args) => {
  const options = {
    hoverOptions: {
      enabled: false
    },
    clickOptions: {
      enabled: true
    }
  }
  return (
    <Tooltip label="the tooltip label" options={{ ...args, ...options }}>
      <div>le' tooltip</div>
    </Tooltip>
  )
}).bind({})

export const Simple = ((args) => {
  return (
    <Tooltip label="test" options={args}>
      <Button>le' tooltip</Button>
    </Tooltip>
  )
}).bind({})
