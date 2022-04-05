import React from "react";
import { IFormLabel } from "../../utils";

import '../../utils/scss/globals.scss';
import './Form.scss';

export function Label({ htmlFor, children }: IFormLabel) {
  return (
    <label className="ccwc-form-element--label" htmlFor={htmlFor || ""}>
      { children }
    </label>
  );
}

export default Label;
