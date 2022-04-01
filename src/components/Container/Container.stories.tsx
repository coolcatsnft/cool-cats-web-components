import React from 'react';
import { Container } from './Container';

export default {
  title: 'Container',
  component: Container,
  argTypes: {
    strikethrough: {
      control: { type: 'boolean' },
      defaultValue: true
    }
  }
}

export const Basic = (() => {
  return (
    <Container>A basic container</Container>
  )
}).bind({});

export const DataAttribute = (() => {
  return (
    <Container data-amount="10">A container with a data attribute</Container>
  )
}).bind({});

export const ConditionalAttribute = ((args) => {
  return (
    <Container
      states={[{
        attr: 'style',
        value: { textDecoration: 'line-through' },
        condition: args.strikethrough === true
      }]}
    >
      A container with a conditional style attribute
    </Container>
  )
}).bind({});