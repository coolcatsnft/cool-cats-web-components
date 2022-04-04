import React from 'react';
import { Tabs } from './Tabs';

export default {
  title: 'Tabs',
  component: Tabs
}

export const Example = (() => {
  return (
    <Tabs tabs={['Tab 1', 'Tab 2']}>
      <>Tab pane 1</>
      <>Tab pane 2</>
    </Tabs>
  )
}).bind({});