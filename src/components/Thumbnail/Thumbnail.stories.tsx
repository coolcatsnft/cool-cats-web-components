import React from 'react';
import { getSizes } from '../../utils';
import { Thumbnail, ThumbnailImage } from './Thumbnail';

export default {
  title: 'Thumbnail',
  component: Thumbnail,
  argTypes: {
    selected: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    closeable: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    clickable: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    size: {
      control: "select",
      options: getSizes(),
      defaultValue: "",
      name: "Size"
    },
    href: {
      control: {
        type: 'text'
      },
      defaultValue: ''
    },
    quantity: {
      control: {
        type: 'number',
        min: 0,
        max: 999
      },
      defaultValue: null
    }
  }
}

export const Example = ((args) => {
  return (
    <Thumbnail {...args} onClick={args.clickable ? () => alert('Hello') : undefined}>
      <ThumbnailImage src={`https://metadata.coolcatsnft.com/item/image/6.png`} />
    </Thumbnail>
  )
}).bind({});
