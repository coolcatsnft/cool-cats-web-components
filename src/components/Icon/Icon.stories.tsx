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
import { Milk } from './Milk';
import { Icon } from './Icon';
import { Opensea } from './Opensea';
import { Logo, LogoMotion, SiteLogo, SiteLogoMotion, WhiteOutlineLogo, WhiteOutlineLogoMotion } from './Logo';

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

export const MilkIcon = (() => {
  return (
    <Milk />
  )
}).bind({});

export const OpenseaIcon = (() => {
  return (
    <Opensea />
  )
}).bind({});

export const LogoIcon = (() => {
  return (
    <Logo />
  )
}).bind({});

export const LogoEyesIcon = (() => {
  return (
    <LogoMotion />
  )
}).bind({});

export const WhiteOutlineLogoIcon = (() => {
  return (
    <WhiteOutlineLogo />
  )
}).bind({});

export const WhiteOutlineLogoMotionIcon = (() => {
  return (
    <WhiteOutlineLogoMotion />
  )
}).bind({});

export const SiteLogoIcon = (() => {
  return (
    <SiteLogo />
  )
}).bind({});

export const SiteLogoMotionIcon = (() => {
  return (
    <SiteLogoMotion />
  )
}).bind({});

export const IconExample = (() => {
  return (
    <Icon>
      <i>
        <Pet />
      </i>
    </Icon>
  )
}).bind({});

export const IconWithColourExample = (() => {
  return (
    <Icon states={[{ className: 'simple-yellow' }]}>
      <i>
        <Pet />
      </i>
    </Icon>
  )
}).bind({});

export const MultipleIconsExample = (() => {
  return (
    <>
      <Icon title="Pet" color="grey eggshake">
        <i>
          <Pet />
        </i>
      </Icon>
      <Icon color="opensea">
        <a href='#'>
          <Opensea />
        </a>
      </Icon>
      <Icon color="opensea shake--hover" className="ccwc-icon--fill">
        <a href='#'>
          <Opensea invert />
        </a>
      </Icon>
      <Icon color="grey">
        <i>
          <Shop />
        </i>
      </Icon>
      <Icon color="opensea" className="ccwc-icon--fill">
        <button>
          <Opensea invert />
        </button>
      </Icon>
    </>
  )
}).bind({});