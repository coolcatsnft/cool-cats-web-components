import React from 'react';
import { getSizes } from '../../utils';
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
    size: {
      control: "select",
      options: getSizes(),
      defaultValue: "",
      name: "Size"
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
    noStatGaps: {
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
    ticked: {
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
    },
    hideStats: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    hideBadge: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
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
      size={args.size}
      selected={args.selected}
      claimable={args.claimable}
      href={args.href}
      hideStats={args.hideStats}
      hideBadge={args.hideBadge}
      ticked={args.ticked}
      noStatGaps={args.noStatGaps}
    />
  )
}).bind({});