import React, { useState } from "react";
import { Input } from "../Form";
import Button from "../Button";
import Container from "../Container";
import { IButtonProps, InputProps } from "../../utils";

import '../../utils/scss/globals.scss';
import './InputButton.scss';

export function InputButton({ input, button }: { input: InputProps, button: IButtonProps}) {
  const [value, setValue] = useState<any>(input.value);

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

  return (
    <Container className="ccwc-input-button">
      <Input {...input} onChange={onChange}  />
      <Button
        {...button}
        onClick={onClick}
      />
    </Container>
  )
}

export default InputButton;
