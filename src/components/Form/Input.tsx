import React, { forwardRef, useState } from "react";
import BooleanVisibilityContainer from "../BooleanVisibilityContainer";
import Element from "./Element";
import { InputProps } from '../../utils';

export const Input = forwardRef<any, Partial<InputProps>>((props, ref) => {
  const { errorMessage } = props;
  const isTextArea = props.type === 'textarea';
  const isStringType = props.type === 'text' || props.type === 'email';
  const isNumberType = props.type === 'number' || props.type === 'tel';
  const [_value, _setValue] = useState<string | boolean>(props.type === 'checkbox' || props.type === 'radio' ? (props.value || false) : String(props.value || ''));
  const [_checked, setChecked] = useState<boolean>(props.type === 'checkbox' || props.type === 'radio' ? (props.checked || false) : false);

  const iProps = {
    ...props,
    placeholder: (isStringType || isNumberType) ? props.placeholder || '' : undefined,
    autoComplete: props.autoComplete || 'off',
    type: props.type || 'text',
    id: props.id || props.name

  }

  const setValue = (e: any) => {
    if (props.type === 'checkbox' || props.type === 'radio') {
      setChecked(e.target.checked);
    } else {
      _setValue(String(e?.target?.value || ''));
    }
  }

  iProps.onBlur = (e: any) => {
    if (props.type === 'checkbox' || props.type === 'radio') {
      setValue(e);
    }
  }

  iProps.onChange = (e: any) => {
    setValue(e)
    if (props.onChange) {
      props.onChange(e);
    }
  }

  if (props.max && isStringType) {
    iProps.maxLength = props.max;
  }

  if (props.min && isStringType) {
    iProps.minLength = props.min;
  }

  if (props.value) {
    iProps.defaultValue = props.value;
  }

  if (props.type === 'number' && props.min) {
    iProps.min = props.min;
  }

  if (props.type === 'number' && props.max) {
    iProps.max = props.max;
  }
  let lbl = props.label;

  if (props.type === 'textarea' && props.max && typeof _value === 'string') {
    const len = _value.length || 0;
    lbl = `${props.label} (${len}/${props.max})`;
  }

  if (props.readonly) {
    return (
      <Element type="static" htmlFor={props.name} label={lbl}>
        {!isTextArea && <p>{props.value || `#`}</p>}
        {isTextArea && props.value.length > 0 && <pre>{props.value.length > 30 ? `${props.value.substring(0, 30).trim()}...` : props.value}</pre>}
        {isTextArea && props.value.length === 0 && <p>#</p>}
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
        error={!!props.errorMessage}
        htmlFor={props.id}
        label={lbl}
      >
        {props.type !== 'textarea' && <input {...iProps} ref={ref} />}
        {props.type === 'textarea' && <textarea {...iProps} ref={ref} cols={iProps.cols || 5} rows={iProps.rows || 4} />}
      </Element>
      {errorMessage && <BooleanVisibilityContainer className="error" visible={!!errorMessage}>{errorMessage}</BooleanVisibilityContainer>}
    </>
  );
})
