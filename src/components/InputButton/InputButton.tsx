import React, { useState } from "react";
import { Input } from "../Form";
import Button from "../Button";
import Container from "../Container";
import { IInput, IButtonProps } from "../../utils";

import '../../utils/scss/globals.scss';
import './InputButton.scss';

export function InputButton({ input, button}: { input: IInput, button: IButtonProps}) {
  const [value, setValue] = useState<any>(undefined);
  const [error, setError] = useState<any>(undefined);
  const onError = (e: any) => {
    setError(e);
    if (input.onError) {
      return input.onError(value);
    }
  };
  const onChange = (e: any) => {
    setValue(e.target.value);
    if (input.onChange) {
      return input.onChange(value);
    }
  };
  const onClick = () => {
    if (button.onClick) {
      return button.onClick(value);
    }
  };

  const buttonProps = {...button};
  buttonProps.disabled = buttonProps.disabled || error === true || (typeof error === 'string' && error.length > 0) || value === undefined || (input.required && !value);
  return (
    <Container className="ccwc-input-button">
      <Input {...input} hideLabel onChange={onChange} onError={onError} />
      <Button
        {...buttonProps}
        onClick={onClick}
      />
    </Container>
  )
}

export default InputButton;
