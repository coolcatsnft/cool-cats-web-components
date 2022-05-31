import React from 'react';
import RarityBadge from '../RarityBadge/RarityBadge';
import { Stats } from './Stats';

export default {
  title: 'Stats',
  component: Stats
}

export const CatExample = (() => {
  const props = {
    header: "# 1",
    stats: {
      hats: 1,
      shirt: 2,
      face: 2
    }
  };

  return (
    <Stats {...props} />
  )
}).bind({});

export const CatWithBadgeExample = (() => {
  const props = {
    header: "# 1",
    stats: {
      hats: 1,
      shirt: 2,
      face: 2
    }
  };

  return (
    <Stats {...props}>
      <RarityBadge label="Cool" value={2}>
        <span>{ 2 }</span>
      </RarityBadge>
    </Stats>
  )
}).bind({});

export const PetExample = (() => {
  const props = {
    stats: {
      questsRemaining: {
        max: 10,
        amount: 4
      },
      dailyItemInteractions: {
        max: 50,
        amount: 36
      },
      phaseItemInteractions: {
        max: 25,
        amount: 12
      }
    }
  };

  return (
    <Stats {...props} />
  )
}).bind({});

export const PetWithEnergyExample = (() => {
  const props = {
    stats: {
      energy: {
        max: 100,
        amount: 90
      },
      questsRemaining: {
        max: 10,
        amount: 4
      },
      dailyItemInteractions: {
        max: 50,
        amount: 36
      },
      phaseItemInteractions: {
        max: 25,
        amount: 12
      }
    }
  };

  return (
    <Stats {...props} />
  )
}).bind({});

export const PetWithEnergyWithBadgeExample = (() => {
  const props = {
    stats: {
      energy: {
        max: 100,
        amount: 90
      },
      questsRemaining: {
        max: 10,
        amount: 4
      },
      dailyItemInteractions: {
        max: 50,
        amount: 36
      },
      phaseItemInteractions: {
        max: 25,
        amount: 12
      }
    }
  };

  return (
    <Stats {...props}>
      <RarityBadge label="Phase">
        <span>Egg</span>
      </RarityBadge>
    </Stats>
  )
}).bind({});

export const PetExampleNoGaps = (() => {
  const props = {
    stats: {
      questsRemaining: {
        max: 10,
        amount: 4
      },
      dailyItemInteractions: {
        max: 50,
        amount: 36
      },
      phaseItemInteractions: {
        max: 25,
        amount: 23
      }
    },
    nogaps: true
  };

  return (
    <Stats {...props} />
  )
}).bind({});

export const PetWithBadgeExample = (() => {
  const props = {
    stats: {
      questsRemaining: {
        max: 10,
        amount: 4
      },
      dailyItemInteractions: {
        max: 50,
        amount: 36
      },
      phaseItemInteractions: {
        max: 25,
        amount: 12
      }
    }
  };

  return (
    <Stats {...props}>
      <RarityBadge label="Phase">
        <span>Egg</span>
      </RarityBadge>
    </Stats>
  )
}).bind({});


export const PetWithBadgeExampleNoGaps = (() => {
  const props = {
    stats: {
      energy: {
        max: 100,
        amount: 40
      },
      questsRemaining: {
        max: 10,
        amount: 4
      },
      dailyItemInteractions: {
        max: 50,
        amount: 36
      },
      phaseItemInteractions: {
        max: 25,
        amount: 12
      }
    }
  };

  return (
    <Stats {...props} nogaps>
      <RarityBadge label="Phase">
        <span>Egg</span>
      </RarityBadge>
    </Stats>
  )
}).bind({});
