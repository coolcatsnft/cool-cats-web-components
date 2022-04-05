import React from 'react';
import Container from '../Container';
import { Fieldset } from './Fieldset';
import { Input } from './Input';

export default {
  title: 'Form/Fieldset',
  component: Fieldset
}

export const Basic = (() => {
  return (
    <Fieldset legend='Field set'>
      <Input name='test1' label='Text box 1' />
      <Input name='test2' label='Text box 2' />
    </Fieldset>
  )
}).bind({});

export const Multiple = (() => {
  return (
    <Container className="ccwc-fieldsets">
      <Fieldset legend='Field set 1'>
        <Input name='test1' type="number" max={10} showError label='Number box 1' />
        <Input name='test2' label='Text box 2' />
      </Fieldset>
      <Fieldset legend='Field set 2'>
        <Input name='test3' label='Text box 3' />
        <Input name='test4' label='Text box 4' />
      </Fieldset>
      <Fieldset legend='Field set 3'>
        <Input name='test5' label='Text box 5' />
        <Input name='test6' label='Text box 6' />
      </Fieldset>
    </Container>
  )
}).bind({});
