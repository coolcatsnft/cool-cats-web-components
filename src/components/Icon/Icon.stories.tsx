import React from 'react';
import { Cat } from './Cat';
import { Pet } from './Pet';
import { Item } from './Item';
import { Marketplace } from './Marketplace';
import { Questing } from './Questing';
import { Housing } from './Housing';
import { Battling } from './Battling';
import { Shop } from './Shop';
import { Envelope } from './Envelope';
import { Meowpad } from './Meowpad';
import { Help } from './Help';

export default {
  title: 'Icon',
  component: Cat
}

export const CatIcon = (() => {
  return (
    <Cat />
  )
}).bind({});

export const PetIcon = (() => {
  return (
    <Pet />
  )
}).bind({});

export const ItemIcon = (() => {
  return (
    <Item />
  )
}).bind({});

export const MarketplaceIcon = (() => {
  return (
    <Marketplace />
  )
}).bind({});

export const QuestingIcon = (() => {
  return (
    <Questing />
  )
}).bind({});

export const HousingIcon = (() => {
  return (
    <Housing />
  )
}).bind({});

export const BattlingIcon = (() => {
  return (
    <Battling />
  )
}).bind({});

export const ShopIcon = (() => {
  return (
    <Shop />
  )
}).bind({});

export const EnvelopeIcon = (() => {
  return (
    <Envelope />
  )
}).bind({});

export const MeowpadIconClosed = (() => {
  return (
    <Meowpad />
  )
}).bind({});

export const MeowpadIconOpen = (() => {
  return (
    <Meowpad open />
  )
}).bind({});

export const HelpIcon = (() => {
  return (
    <Help />
  )
}).bind({});