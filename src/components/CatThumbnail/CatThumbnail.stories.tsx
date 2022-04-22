import React from 'react';
import { CatThumbnail } from './CatThumbnail';

export default {
  title: 'CatThumbnail',
  component: CatThumbnail,
  argTypes: {
    value: {
      control: {
        type: 'number',
        min: 2,
        max: 12
      },
      defaultValue: 2
    }
  }
}

export const Example = (() => {
  return (
    <CatThumbnail 
      src="https://ipfs.io/ipfs/QmXT9Gaiu6Znoz8hwf4788vTy2MnhpWCLBET1gS5XNvf4r" 
      id={0} 
      stats={{
        hats: 3, 
        shirt: 1,
        face: 1,
      }}
    />
  )
}).bind({});