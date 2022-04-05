import React from 'react';
import { TPanelType } from '../../utils';
import { Panel } from './Panel';
import ItemSummary from '../ItemSummary';
import List from '../List';
import { Input } from '../Form/Input';
import { Element } from '../Form/Element';

export default {
  title: 'Panel',
  component: Panel
}

export const Example = (() => {
  return (
    <Panel type={TPanelType.LISTITEM} header="Panel Example">
      <p><small>You are about to list an item on the Marketplace.</small></p>
      <Input 
        type="number" 
        min={0} 
        pattern={/^\d+$/} 
        restrictOnError 
        max={10000000}
        name="gold" 
        label="Price per item (required)" 
        placeholder="$MILK"
        showError
      />

      <Element type="text" label="Summary">
        <ItemSummary>
          <img src="https://via.placeholder.com/150" />
          <List>
            <strong>List item 1</strong>
            <strong>List item 2</strong>
            <strong>List item 3</strong>
            <strong>List item 4</strong>
          </List>
        </ItemSummary>
      </Element>
    </Panel>
  )
}).bind({});