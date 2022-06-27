import React from 'react';
import { getSizes } from '../../utils';
import { PetThumbnail } from './PetThumbnail';

export default {
  title: 'PetThumbnail',
  component: PetThumbnail,
  argTypes: {
    id: {
      control: {
        type: 'number',
        min: 0,
        max: 19999
      },
      defaultValue: 0
    },
    size: {
      control: "select",
      options: getSizes(),
      defaultValue: "",
      name: "Size"
    },
    dailyQuestsRemainingAmount: {
      control: {
        type: 'number',
        min: 0,
        max: 10
      },
      defaultValue: 0,
      name: "Daily Quests Complete"
    },
    dailyItemInteractionsAmount: {
      control: {
        type: 'number',
        min: 0,
        max: 5
      },
      defaultValue: 0,
      name: "Daily interactions"
    },
    energyAmount: {
      control: {
        type: 'number',
        min: 0,
        max: 100
      },
      defaultValue: 100,
      name: "Energy remaining"
    },
    stageItemInteractionsAmount: {
      control: {
        type: 'number',
        min: 0,
        max: 5
      },
      defaultValue: 0,
      name: "Stage interactions"
    },
    stageItemInteractionsMax: {
      control: {
        type: 'select',
        options: [10, 15, 25]
      },
      defaultValue: 10,
      name: "Stage interactions (max)"
    },
    stage: {
      control: {
        type: 'select',
        options: ["", "egg", "one", "two", "final_form"]
      },
      defaultValue: "egg"
    },
    element: {
      control: {
        type: 'select',
        options: ["", "air", "fire", "grass", "water"]
      },
      defaultValue: ""
    },
    noStatGaps: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    selected: {
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
    staked: {
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
    enableOnClick: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
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
    },
    closeable: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
  }
}

export const Example = ((args) => {
  return (
    <PetThumbnail
      src={`https://metadata.coolcatsnft.com/pet/image/${args.id}.png`}
      stats={!args.hideStats ? {
        energy: {
          amount: args.energyAmount,
          max: 100
        },
        questsRemaining: {
          amount: args.dailyQuestsRemainingAmount,
          max: 10
        },
        dailyItemInteractions: {
          amount: args.dailyItemInteractionsAmount,
          max: 5
        },
        stageItemInteractions: {
          amount: args.stageItemInteractionsAmount,
          max: args.stageItemInteractionsMax
        }
      }: undefined}
      onClick={args.enableOnClick ? () => alert('Hello') : undefined}
      {...args}
    />
  )
}).bind({});

export const WithChildNode = ((args) => {
  return (
    <PetThumbnail
      id={args.id}
      stats={{
        questsRemaining: {
          amount: args.dailyQuestsRemainingAmount,
          max: 10
        },
        dailyItemInteractions: {
          amount: args.dailyItemInteractionsAmount,
          max: 5
        },
        stageItemInteractions: {
          amount: args.stageItemInteractionsAmount,
          max: args.stageItemInteractionsMax
        }
      }}
      {...args}
    >
      <img src="https://via.placeholder.com/150" />
    </PetThumbnail>
  )
}).bind({});
