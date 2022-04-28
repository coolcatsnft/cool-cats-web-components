import React from 'react';
import { getSizes } from '../../utils';
import CatThumbnail from '../CatThumbnail/CatThumbnail';
import { Thumbnail, ThumbnailImage } from '../Thumbnail';
import { ThumbnailList } from '../ThumbnailList';

export default {
  title: 'ThumbnailList',
  component: ThumbnailList,
  argTypes: {
    selectable: {
      control: "boolean",
      defaultValue: false
    },
    fluid: {
      control: "boolean",
      defaultValue: false
    },
    showCloseIcon: {
      control: "boolean",
      defaultValue: false
    },
    amount: {
      control: {
        type: 'number',
        min: 1,
        max: 200
      },
      defaultValue: 20,
      name: "# Thumbnails"
    },
    size: {
      control: "select",
      options: getSizes(),
      defaultValue: "",
      name: "Size"
    }
  }
}

const getItemThumbnails = (amount?: number) => {
  return Array.from(Array(amount || 20).keys()).map((index: number) => {
    return (
      <Thumbnail key={String(index)}>
        <ThumbnailImage src={`https://metadata.coolcatsnft.com/item/image/${index+1}.png`} />
      </Thumbnail>
    )
  })
}

const getImageThumbnails = (amount?: number) => {
  return Array.from(Array(amount || 20).keys()).map((index: number) => {
    return (
      <img key={index} src={`https://metadata.coolcatsnft.com/item/image/${index+1}.png`} />
    )
  })
}

const getCatThumbnails = (amount?: number) => {
  return Array.from(Array(amount || 20).keys()).map((index: number) => {
    return (
      <CatThumbnail 
        id={String(index)}
        key={String(index)}
        src={`https://s3.amazonaws.com/api.coolcatsnft.com/thumbnails/${index}_thumbnail.png`}
        stats={{
          hats: 3, 
          shirt: 1,
          face: 1
        }}
      />
    )
  })
}

export const Items = ((args) => {
  return (
    <ThumbnailList {...args} onChange={console.log}>
      {getItemThumbnails(args.amount)}
    </ThumbnailList>
  )
}).bind({});

export const Cats = ((args) => {
  return (
    <ThumbnailList {...args} onChange={console.log}>
      {getCatThumbnails(args.amount)}
    </ThumbnailList>
  )
}).bind({});

export const Images = ((args) => {
  return (
    <ThumbnailList {...args} onChange={console.log}>
      {getImageThumbnails(args.amount)}
    </ThumbnailList>
  )
}).bind({});
