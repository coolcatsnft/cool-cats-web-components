import React from 'react';
import Container from "../Container";

import '../../utils/scss/globals.scss';
import './ItemSummary.scss';

export function ItemSummary(props: any) {
  return (
    <Container 
      {...props}
      className={props.className || ''}
      states={(props.states || []).concat([{
        className: 'ccwc-item-summary'
      }])}
    >
      { props.children }
    </Container>
  )
}

export default ItemSummary;
