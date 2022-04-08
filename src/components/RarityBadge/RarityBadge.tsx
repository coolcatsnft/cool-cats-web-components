import React from 'react';
import Container from '../Container';
import Header from '../Header';

import './RarityBadge.scss';

export function RarityBadge({ label, className, value, children }: { label: string, className?: string, value?: number, children?: React.ReactNode }) {
  return (
    <Container 
      className={className || ""}
      states={[{
        className: `ccwc-rarity-badge`
      }, {
        attr: "data-value",
        value: typeof value === 'number' ? value : 0,
        condition: (value: any) => value > 0
      }]}
    >
      <Header size="4">{ label }</Header>
      { children }
    </Container>
  );
}

export default RarityBadge;
