import React from "react";
import Container from "../Container";
import { IGenericElementProps } from "../../utils";

import '../../utils/scss/globals.scss';
import './ErrorMessage.scss';

export function ErrorMessage({ children, className, elementType: ElementType = 'p', ...rest }: IGenericElementProps) {
  return (
    <Container elementType={ElementType} className={[className || '', "ccwc-error-message"]}>
      { children }
    </Container>
  );
}

export default ErrorMessage;