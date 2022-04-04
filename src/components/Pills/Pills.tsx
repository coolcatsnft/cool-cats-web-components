import React from 'react';
import { IPills } from '../../utils';
import Container from '../Container';

import './Pills.scss';

export function Pills({ children, className, bordered, states, ...rest }: IPills) {
  const pillsStates = (states || []).concat([{
    className: "bordered",
    condition: bordered === true
  }]);
  return (
    <Container
      {...rest}
      className={["ccwc-pills", className || '']}
      states={pillsStates}
    >
      { children }
    </Container>
  );
}

export default Pills;
