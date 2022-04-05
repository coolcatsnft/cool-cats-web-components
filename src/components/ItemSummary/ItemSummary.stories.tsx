import React from 'react';
import { ItemSummary } from './ItemSummary';
import List from '../List';

export default {
  title: 'ItemSummary',
  component: ItemSummary
}

export const Basic = (() => {
  return (
    <ItemSummary>
      <img src="https://via.placeholder.com/150" />
      <List>
        <>List item 1</>
        <>List item 2</>
        <>List item 3</>
        <>List item 4</>
      </List>
    </ItemSummary>
  )
}).bind({});