import React from 'react';
import Container from '../Container';
import { List } from './List';

export default {
  title: 'List',
  component: List,
  argTypes: {
    elementType: {
      control: "select",
      options: ["ul", "ol"],
      defaultValue: "ul",
      name: "List type"
    }
  }
}

export const BasicList = ((args) => {
  return (
    <List {...args}>
      <>A simple list</>
      <>A simple list</>
      <>A simple list</>
    </List>
  )
}).bind({});

export const ListWithAContainerElement = ((args) => {
  return (
    <List {...args}>
      <>Item 1</>
      <Container>Item 2 (should be a li with a nested div)</Container>
      <Container elementType="li">Item 2 (should just be a li)</Container>
      <strong>Item 4</strong>
    </List>
  )
}).bind({});