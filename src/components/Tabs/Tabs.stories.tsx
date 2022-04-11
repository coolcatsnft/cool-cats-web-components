import React from 'react';
import Icon from '../Icon/Icon';
import Shop from '../Icon/Shop';
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

export const ExampleTwo = (() => {
  const headers = [
    'Tab 1',
    {
      tab: 'Tab 2',
      content: 'Tab 2 with extended header'
    },
    {
      tab: 'Tab 3',
      content: <>
        <i>
          <Shop />
        </i>
        Tab 3
      </>
    }
  ];
  const panes = [
    <i key={0}>Tab pane 1</i>,
    <i key={1}>Tab pane 2</i>,
    <i key={2}>Tab pane 3</i>
  ];
  return (
    <Tabs tabs={headers} callback={(tab: string) => alert(tab)}>
      { panes }
    </Tabs>
  )
}).bind({});