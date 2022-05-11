import React from 'react';
import { Accordion } from './Accordion';

export default {
  title: 'Accordion',
  component: Accordion,
  argTypes: {}
}
const items = [
  {
    id: 1,
    name: 'Menu 1',
    submenu: [
      {
        id: 2,
        name: 'submenu test 1'
      },
      {
        id: 3,
        name: 'submenu 2'
      }
    ]
  },
  {
    id: 4,
    name: 'Menu 2'
  },
  {
    id: 5,
    name: 'Menu 3',
    submenu: [
      {
        id: 6,
        name: 'submenu test 2'
      },
      {
        id: 7,
        name: 'submenu 22'
      }
    ]
  },
]

export const AccordionExample = ((args) => {
  return (
    <Accordion {...args} items={items} onItemClick={(item) => console.log(item)} />
  )
}).bind({})

export const AccordionExampleWithSelectedSubItem = ((args) => {
  return (
    <Accordion {...args} items={items} onItemClick={(item) => console.log(item)} activeItem={3} />
  )
}).bind({})

export const AccordionExampleWithSelectedSubItemAllowingAllOpen = ((args) => {
  return (
    <Accordion {...args} items={items} onItemClick={(item) => console.log(item)} activeItem={3} allowAllOpen />
  )
}).bind({})
