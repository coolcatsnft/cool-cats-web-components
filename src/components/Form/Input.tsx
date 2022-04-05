/* eslint-disable consistent-return */
import React, { useState } from "react";
import { IInput } from "../../utils";
import BooleanVisibilityContainer from "../BooleanVisibilityContainer";
import Element from "./Element";

export function Input({ name, id, type, value, label, min, max, hideLabel, placeholder, pattern, onChange, onError, disabled, checked, restrictOnError, showError, readonly }: IInput) {
  const [_error, _setError] = useState<boolean | string>(false);
  const [_value, _setValue] = useState<string | boolean>(type === 'checkbox' || type === 'radio' ? (value || false) : String(value || ''));
  const [_checked, setChecked] = useState<boolean>(type === 'checkbox' || type === 'radio' ? (checked || false) : false);
  const isError = (typeof _error === 'string' && _error.length > 0) || _error === true;

  if (!type) {
    // eslint-disable-next-line no-param-reassign
    type = 'text';
  }

  const isTextArea = type === 'textarea';
  const isStringType = isTextArea || type === 'text' || type === 'email';
  const isNumberType = type === 'number' || type === 'tel';

  const setValue = (e: any) => {
    if (type === 'checkbox' || type === 'radio') {
      setChecked(e.target.checked);
    } else {
      _setValue(String(e?.target?.value || ''));
    }
  };

  const setError = (e: any, event: any) => {
    _setError(e);
    if (e && onError) {
      onError(e, event);
    }
  };
  
  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  let lbl = label;
  if (!lbl) {
    lbl = name;
  }

  if (label === false) {
    lbl = '';
  }

  if (readonly) {
    return (
      <Element type="static" htmlFor={name} label={lbl}>
        { !isTextArea && <p>{ value || `#` }</p> }
        { isTextArea && value.length > 0 && <pre>{ value.length > 30 ? `${value.substring(0, 30).trim()}...` : value }</pre> }
        { isTextArea && value.length === 0 && <p>#</p> }
      </Element>
    );
  }

  const iProps = {} as any;
  iProps.placeholder = (isStringType || isNumberType) ? placeholder || '' : undefined;
  iProps.type = type;
  iProps.name = name;
  iProps.id = id || name;
  iProps.disabled = disabled === true;

  if (isStringType) {
    iProps.autoComplete = "off"
  }

  if (max && isStringType) {
    iProps.maxLength = max;
  }

  if (min && isStringType) {
    iProps.minLength = min;
  }

  if (type === 'checkbox' || type === 'radio') {
    iProps.checked = checked;
  }
  
  if (value) {
    iProps.defaultValue = value;
  }

  if (type === 'number' && min) {
    iProps.min = min;
  }

  if (type === 'number' && max) {
    iProps.max = max;
  }

  if (type === 'textarea' && max && typeof _value === 'string') {
    const len = _value.length || 0;
    lbl = `${lbl} (${len}/${max})`;
  }

  iProps.onBlur = (e: any) => {
    if (type === 'checkbox' || type === 'radio') {
      setValue(e);
    }
  }
  
  iProps.onChange = (e: any) => {
    setError(false, e);
    setValue(e);
    if (onChange) {
      onChange(e);
    }

    if (e.target.value.length === 0) {
      return;
    }

    if (isStringType) {
      if (typeof max === 'number' && e.target.value.length > max) {
        setError('Value exceeds the maximum length', e);
      }
      if (typeof min === 'number' && e.target.value.length < min) {
        setError('Value is less than the minimum length', e);
      }
      if (pattern && !pattern.test(e.target.value)) {
        setError(`Value doesn't match requirements of ${pattern}`, e);
      }
    }
    if (type === 'email') {
      if (!validateEmail(e.target.value)) {
        setError('Invalid email address', e);
      }
    }
    if (type === 'number') {
      if (typeof min === 'number' && parseFloat(e.target.value) < min) {
        setError(`Value is less than the minimum of ${min}`, e);
      } else if (typeof max === 'number' && parseFloat(e.target.value) > max) {
        setError(`Value is more than the maximum of ${max}`, e);
      } else if (pattern && !pattern.test(e.target.value)) {
        setError('Value doesn\'t match requirements', e);
      } else if (Number.isNaN(parseFloat(e.target.value))) {
        setError(`Not a number`, e);
      }
      try {
        // eslint-disable-next-line no-undef
        BigInt(e.target.value);
      } catch (e: any) {
        setError(e.toString(), e);
      }
    }
  }

  iProps.onKeyDown = (e: any) => {
    const validKeys = [8, 46, 37, 39];

    // javascript-char-codes-key-codes 
    if (e.keyCode < 106 && restrictOnError === true) {
      if (_error && validKeys.indexOf(e.keyCode) < 0) {
        e.preventDefault();
        return false;
      }
    }

    return true;
  }

  const getError = () => {
    if (typeof _error === 'string') {
      if (_error.indexOf('SyntaxError') >= 0) {
        return 'Only whole numbers are allowed';
      }
      if (_error.indexOf('w+$') >= 0) {
        return 'Only letters or numbers allowed';
      }
      if (_error.indexOf('s]') >= 0) {
        return 'Only letters or numbers allowed';
      }
      if (_error.indexOf('d+$') >= 0) {
        return 'Only whole numbers allowed';
      }

      return _error;
    }

    // &nbsp;
    return '\u00A0';
  };

  return (
    <>
      <Element
        type={type}
        disabled={disabled}
        error={isError}
        htmlFor={iProps.id}
        label={!hideLabel && lbl}
      >
        { type !== 'textarea' && <input {...iProps} /> }
        { type === 'textarea' && <textarea {...iProps} cols={5} rows={4} /> }
      </Element>
      { showError && <BooleanVisibilityContainer className="error" visible={typeof _error === 'string' && _error.length > 0}>{ typeof _error === 'string' ? getError() : '' }</BooleanVisibilityContainer> }
    </>
  );
}
