import React, { useState } from "react";
import { IButtonProps, IIncrement } from "../../utils";
import Button from "../Button";
import Container from "../Container";
import Increment from "../Increment";

import './ButtonIncrement.scss';

export function ButtonIncrement({ size, colour, disabled = false, allowZero = true, buttonProps, incrementProps }: { size?: string, colour?: string, disabled?: boolean, allowZero?: boolean, buttonProps: IButtonProps, incrementProps: IIncrement }) {
  const [value, setValue] = useState<number>(incrementProps.defaultValue || incrementProps.min);
  const btnProps = {...buttonProps};
  btnProps.disabled = buttonProps.disabled || disabled || (allowZero === false && value === 0);
  btnProps.size = size;
  btnProps.removeBaseClass = true;
  btnProps.states = (btnProps.states || []).concat([{
    className: "ccwc- "
  }]);
  btnProps.onClick = () => {
    if (buttonProps.onClick) {
      buttonProps.onClick(value);
    }
  }

  const incProps = {...incrementProps};
  incProps.disabled = incrementProps.disabled || disabled || (allowZero === false && value === 0);
  incProps.buttonSize = size;
  incProps.removeBaseClass = true;
  incProps.buttonClassName = "ccwc-button";
  incProps.callback = (val: number) => {
    setValue(val);
    if (incrementProps.callback) {
      incrementProps.callback(val);
    }
  };

  return (
    <Container 
      className="ccwc-button-increment"
      states={[{
        className: typeof size === 'string' && size.length > 0 ? size : ''
      }, {
        className: typeof colour === 'string' && colour.length > 0 ? colour : ''
      }, {
        attr: "disabled",
        value: "disabled",
        condition: disabled === true || (allowZero === false && value === 0)
      }]}
    >
      <Button {...btnProps} />
      <Increment {...incProps} />
    </Container>
  );
};

export default ButtonIncrement;
