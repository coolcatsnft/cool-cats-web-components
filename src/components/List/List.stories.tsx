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
    },
    numberOfItems: {
      control: { type: 'number', min: 1, max: 12 },
      defaultValue: 2
    }
  }
}

export const BasicList = ((args) => {
  const items = Array.from(Array(args.numberOfItems).keys()).map((key: number) => {
    return <React.Fragment key={key}>{`List item ${key + 1}`}</React.Fragment>;
  });
  return (
    <List elementType={args.elementType}>
      { items }
    </List>
  )
}).bind({});

export const ListWithAContainerElement = (() => {
  return (
    <List>
      <>Item 1</>
      <Container>Item 2 (should be a li with a nested div)</Container>
      <Container elementType="li">Item 2 (should just be a li)</Container>
      <strong>Item 4</strong>
    </List>
  )
}).bind({});