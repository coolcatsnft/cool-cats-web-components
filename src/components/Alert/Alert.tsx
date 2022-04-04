import React from "react";
import Container from "../Container";

import '../../utils/scss/globals.scss';
import './Alert.scss';
import '../BooleanVisibilityContainer/BooleanVisibilityContainer.scss';

export function AlertText({ children }: { children?: React.ReactNode }) {
  return (
    <Container className="ccwc-text">
      { children }
    </Container>
  );
}

export function Alert({ visible, fixed, type, className, children }: { visible?: boolean, fixed?: boolean, type?: string, className?: string, children?: React.ReactNode }) {
  return (
    <Container 
      className={[
        'ccwc-alert'
      ]} 
      states={[{
        className: className ? `${className}` : '',
        condition: typeof className === 'string' && className.length > 0
      }, {
        className: type ? `ccwc-alert--${type}` : '',
        condition: typeof type === 'string' && type.length > 0
      }, {
        className: 'ccwc-boolean-visibility',
        condition: typeof visible === 'boolean'
      }, {
        className: 'ccwc-boolean-visibility--hidden',
        condition: visible === false
      }, {
        className: 'ccwc-boolean-visibility--visible',
        condition: visible === true
      }, {
        className: 'ccwc-alert--fixed',
        condition: fixed === true
      }]}
    >
      {children}
    </Container>
  )
}

export default Alert;
