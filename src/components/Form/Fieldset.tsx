import React from "react";
import Container from "../Container";
import Legend from "./Legend";

import '../../utils/scss/globals.scss';
import './Form.scss';

export function Fieldset(props: any) {
  return (
    <Container 
      elementType="fieldset"
      className={props.className || ''}
      states={(props.states || []).concat([{
        className: 'ccwc-form-fieldset'
      }])}
    >
      { props.legend && <Legend>{ props.legend }</Legend> }
      { props.children || null }
    </Container>
  );
}

export default Element;
