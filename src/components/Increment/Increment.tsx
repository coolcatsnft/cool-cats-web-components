import React from 'react';
import { useState, useEffect } from 'react';
import { IIncrement } from '../../utils';
import Button from '../Button';
import Container from '../Container';
import { Element } from '../Form';

import './Increment.scss';

export function Increment({ min, max, defaultValue, callback, label, buttonSize, disabled = false }: IIncrement) {
  const [value, setValue] = useState<number>(defaultValue || min);

  useEffect(() => {
    if (callback) {
      callback(value);
    }
  }, [value])

  const decrease = () => {
    if (value === min) {
      return;
    }
    setValue(v => v - 1);
  };
  const increase = () => {
    if (value === max) {
      return;
    }
    setValue(v => v + 1);
  };

  return (
    <Element type="increment" label={label}>
      <Container className="ccwc-increment">
        <Button size={buttonSize} disabled={value === min || disabled} onClick={decrease}>-</Button>
        <span>{ value }</span>
        <Button size={buttonSize} disabled={value === max || disabled} onClick={increase}>+</Button>
      </Container>
    </Element>
  );
}

export default Increment;
