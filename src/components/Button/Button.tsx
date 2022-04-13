import React, { useEffect, useState } from 'react';
import { IButtonProps } from '../../utils';
import Container from '../Container';

import '../../utils/scss/globals.scss';
import './Button.scss';

export function Button({ 
  children, 
  label, 
  disabled, 
  sashed, 
  expanded, 
  colour, 
  className, 
  size, 
  onClick, 
  elementType, 
  states, 
  title, 
  removeBaseClass
}: IButtonProps) {
  const [_disabled, setDisabled] = useState(false);
  const [_promised, setPromised] = useState(false);

  useEffect(() => {
    return () => {
      setDisabled(false);
      setPromised(false);
    }
  }, []);

  const buttonClick = () => {
    if (onClick) {
      const evt = onClick();
      if (evt instanceof Promise) {
        setDisabled(true);
        setPromised(true);
        return evt.finally(() => {
          setDisabled(false);
          setPromised(false);
          return evt;
        });
      }

      return evt;
    }
  }

  return (
    <Container
      elementType={elementType || 'button'}
      className={className || ''}
      onClick={buttonClick}
      disabled={disabled || _disabled || false}
      title={title}
      states={[{
        className: 'ccwc-button'
      }, {
        className: 'button',
        condition: !removeBaseClass
      }, {
        className: 'expanded',
        condition: expanded === true
      }, {
        className: 'button--expanded',
        condition: expanded === true
      }, {
        className: 'sashed',
        condition: sashed === true
      }, {
        className: 'button-disabled',
        condition: disabled || _disabled || false
      }, {
        className: 'button-promised',
        condition: _promised === true
      }, {
        className: size || ''
      }, {
        className: colour || ''
      }].concat(states || [])}
    >
      { label }
      { children }
    </Container>
  );
}

export default Button;
