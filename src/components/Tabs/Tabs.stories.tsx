import React from 'react';
import { Tabs } from './Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
  argTypes: {
    numberOfTabs: {
      control: { type: 'number', min: 1, max: 12 },
      defaultValue: 2
    }
  }
}

export const Example = ((args) => {
  const headers = Array.from(Array(args.numberOfTabs).keys()).map((key: number) => {
    return `Tab ${key + 1}`;
  });
  const panes = Array.from(Array(args.numberOfTabs).keys()).map((key: number) => {
    return <i key={key}>{`Tab pane ${key + 1}`}</i>;
  });
  return (
    <Tabs tabs={headers}>
      { panes }
    </Tabs>
  )
}).bind({});