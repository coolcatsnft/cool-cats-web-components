import React from "react";
import { IJustChildrenProps } from "../../utils";

import '../../utils/scss/globals.scss';
import './Form.scss';

export function Legend({ children }: IJustChildrenProps) {
  return (
    <legend className="ccwc-form-element--legend">
      { children }
    </legend>
  );
}

export default Legend;
