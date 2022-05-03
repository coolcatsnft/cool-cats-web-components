import React from "react";
import Container from "../Container";
import { IContainerProps } from "../../utils";

import '../../utils/scss/globals.scss';
import './ErrorMessage.scss';

export function ErrorMessage({ children, className, elementType: ElementType = 'p', ...rest }: IContainerProps) {
  return (
    <Container elementType={ElementType} className={[(className || "")].concat(["ccwc-error-message"]).join(" ")} {...rest}>
      { children }
    </Container>
  );
}

export default ErrorMessage;
