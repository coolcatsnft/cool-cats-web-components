import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { IIncrement } from '../../utils';
import Button from '../Button';
import Container from '../Container';
import { Element } from '../Form';

import './Increment.scss';

const range = (start: number, end?: number, step: number = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i <= end; i += step) {
    output.push(i);
  }
  return output;
};

export function Increment({ min, max, defaultValue, callback, label, buttonSize, disabled = false, removeBaseClass = false, buttonClassName = "" }: IIncrement) {
  const [value, setValue] = useState<number>(defaultValue || min);
  const [editable, setEditable] = useState<boolean>(false);
  const inputRef = useRef<HTMLSelectElement>(null);

  useOnClickOutside(inputRef, () => {
    setEditable(false);
  });

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

  const setValueFromInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e && e.target) {
      setValue(Number(e.target.value));
    }
  };

  return (
    <Element type="increment" label={label} disabled={disabled}>
      <Container className="ccwc-increment">
        <Button size={buttonSize} disabled={value === min || disabled} onClick={decrease} removeBaseClass={removeBaseClass} className={buttonClassName}>-</Button>
        { !editable && <Container elementType="span" disabled={disabled} onClick={() => setEditable(true)}>{ value }</Container> }
        { editable && (
          <select ref={inputRef} disabled={disabled} defaultValue={value} onChange={setValueFromInput}>
            { range(min, max).map((i: number) => <option key={i} value={i}>{i}</option>) }
          </select>
        ) }
        <Button size={buttonSize} disabled={value === max || disabled} onClick={increase} removeBaseClass={removeBaseClass} className={buttonClassName}>+</Button>
      </Container>
    </Element>
  );
}

export default Increment;
