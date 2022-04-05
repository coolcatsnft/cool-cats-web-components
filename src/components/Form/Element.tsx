import React from "react";
import { IFormElement } from "../../utils";
import Container from "../Container";
import Label from "./Label";

import '../../utils/scss/globals.scss';
import './Form.scss';

export function Element({ type, label, disabled, error, htmlFor, children }: IFormElement) {
  return (
    <Container 
      className="ccwc-form-element" 
      states={[{
        className: 'ccwc-form-element--error',
        condition: error === true
      }, { 
        className: `ccwc-form-element--${type}`
      }, { 
        className: 'ccwc-form-element--disabled',
        condition: disabled === true
      }]}
    >
      { label && <Label htmlFor={htmlFor}>{ label }</Label> }
      { children }
    </Container>
  );
}

export default Element;
