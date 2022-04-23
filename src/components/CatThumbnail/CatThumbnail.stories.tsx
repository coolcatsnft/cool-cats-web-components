import React from 'react';
import { CatThumbnail } from './CatThumbnail';

export default {
  title: 'CatThumbnail',
  component: CatThumbnail,
  argTypes: {
    id: {
      control: {
        type: 'number',
        min: 0,
        max: 9999
      },
      defaultValue: 0
    },
    hats: {
      control: {
        type: 'number',
        min: 0,
        max: 10
      },
      defaultValue: 3
    },
    face: {
      control: {
        type: 'number',
        min: 0,
        max: 10
      },
      defaultValue: 1
    },
    shirt: {
      control: {
        type: 'number',
        min: 0,
        max: 10
      },
      defaultValue: 1
    },
    selected: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    claimable: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    href: {
      control: {
        type: 'text'
      },
      defaultValue: ''
    }
  }
}

export const Example = ((args) => {
  return (
    <CatThumbnail 
      src={`https://s3.amazonaws.com/api.coolcatsnft.com/thumbnails/${args.id}_thumbnail.png`}
      id={args.id} 
      stats={{
        hats: args.hats, 
        shirt: args.shirt,
        face: args.face
      }}
      selected={args.selected}
      claimable={args.claimable}
      href={args.href}
    />
  )
}).bind({});