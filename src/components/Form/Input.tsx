import React, { forwardRef } from "react";
import BooleanVisibilityContainer from "../BooleanVisibilityContainer";
import Element from "./Element";
import { InputProps } from '../../utils';

export const Input = forwardRef<any, Partial<InputProps>>((props, ref) => {
  const { error, name, register, hideErrorMessage, ...rest } = props;
  const isTextArea = props.type === 'textarea';
  const isStringType = props.type === 'text' || props.type === 'email';
  const inputRegister = register ? register(name) : {};

  const iProps = {
    ...rest,
    autoComplete: props.autoComplete || 'off',
    type: props.type || 'text',
    id: props.id || props.name
  }

  if (props.max && isStringType) {
    iProps.maxLength = props.max;
  }

  if (props.min && isStringType) {
    iProps.minLength = props.min;
  }

  let lbl = props.label;

  if (props.type === 'textarea' && props.max) {
    const len = props.value?.length || 0;
    lbl = `${props.label} (${len}/${props.max})`;
  }

  if (props.readOnly) {
    return (
      <Element type="static" htmlFor={props.name} label={lbl}>
        {!isTextArea && <p>{props.value || `#`}</p>}
        {isTextArea && props.value?.length > 0 && <pre>{props.value.length > 30 ? `${props.value.substring(0, 30).trim()}...` : props.value}</pre>}
        {isTextArea && props.value?.length === 0 && <p>#</p>}
      </Element>
    );
  }

  return (
    <>
      <Element
        required={props.required}
        type={iProps.type}
        disabled={props.disabled}
        size={props.size}
        error={!!error}
        htmlFor={props.id}
        label={lbl}
      >
        {props.type !== 'textarea' && <input {...inputRegister} {...iProps} />}
        {props.type === 'textarea' && <textarea {...inputRegister} {...iProps} cols={iProps.cols || 5} rows={iProps.rows || 4} />}
      </Element>
      {!hideErrorMessage && error && <BooleanVisibilityContainer className="error" visible={!!error}>{error}</BooleanVisibilityContainer>}
    </>
  );
})
