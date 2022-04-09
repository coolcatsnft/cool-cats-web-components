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
import { Chest, ChestGroup } from './Chest';
import { Circle } from './Circle';
import { Box, BoxGroup } from './Box';
import { Egg, EggGroup } from './Egg';
import { Hammer, HammerGroup } from './Hammer';
import { Share, ShareGroup } from './Share';
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

export const ChestIcon = (() => {
  return (
    <Chest />
  )
}).bind({});

export const BoxIcon = (() => {
  return (
    <Box />
  )
}).bind({});

export const BoxAndCircleIcon = (() => {
  return (
    <Circle>
      <BoxGroup />
    </Circle>
  )
}).bind({});

export const EggIcon = (() => {
  return (
    <Egg />
  )
}).bind({});

export const EggAndCircleIcon = (() => {
  return (
    <Circle>
      <EggGroup />
    </Circle>
  )
}).bind({});

export const CircleIcon = (() => {
  return (
    <Circle />
  )
}).bind({});

export const CircleChestIcon = (() => {
  return (
    <Circle>
      <ChestGroup />
    </Circle>
  )
}).bind({});

export const HammerIcon = (() => {
  return (
    <Hammer />
  )
}).bind({});

export const HammerCircleIcon = (() => {
  return (
    <Circle>
      <HammerGroup />
    </Circle>
  )
}).bind({});

export const ShareIcon = (() => {
  return (
    <Share />
  )
}).bind({});

export const ShareCircleIcon = (() => {
  return (
    <Circle>
      <ShareGroup />
    </Circle>
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
      <Icon color="grey">
        <Chest />
      </Icon>
      <Icon elementType="button" onClick={() => alert('Hello')} color="grey">
        <Share />
      </Icon>
      <Icon elementType="button" onClick={() => alert('Hello')} color="grey" className="eggshake--hover">
        <Egg />
      </Icon>
      <Icon elementType="button" onClick={() => alert('Hello')} color="grey">
        <Box />
      </Icon>
      <Icon color="grey">
        <Hammer />
      </Icon>
      <Icon color="grey">
        <Circle>
          <ChestGroup />
        </Circle>
      </Icon>
      <Icon elementType="button" className="eggshake--hover">
        <Circle>
          <EggGroup />
        </Circle>
      </Icon>
      <Icon elementType="button" className="clickable">
        <Circle fill="grey" stroke="yellow">
          <HammerGroup />
        </Circle>
      </Icon>
      <Icon elementType="button" className="clickable">
        <Circle stroke="red">
          <ShareGroup />
        </Circle>
      </Icon>
    </>
  )
}).bind({});