import React from 'react';
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
    phaseItemInteractionsAmount: {
      control: {
        type: 'number',
        min: 0,
        max: 5
      },
      defaultValue: 0,
      name: "Phase interactions"
    },
    phaseItemInteractionsMax: {
      control: {
        type: 'select',
        options: [10, 15, 25]
      },
      defaultValue: 10,
      name: "Phase interactions (max)"
    },
    phase: {
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
    selected: {
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
    }
  }
}

export const Example = ((args) => {
  return (
    <PetThumbnail 
      src={`https://metadata.coolcatsnft.com/pet/image/${args.id}.png`}
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
        phaseItemInteractions: {
          amount: args.phaseItemInteractionsAmount,
          max: args.phaseItemInteractionsMax
        }
      }}
      selected={args.selected}
      href={args.href}
      phase={args.phase}
      element={args.element}
      staked={args.staked}
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
        phaseItemInteractions: {
          amount: args.phaseItemInteractionsAmount,
          max: args.phaseItemInteractionsMax
        }
      }}
      selected={args.selected}
      href={args.href}
      phase={args.phase}
    />
  )
}).bind({});