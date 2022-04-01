import React from "react";
import Container from "../Container";

import './Alert.scss';
import '../BooleanVisibilityContainer/BooleanVisibilityContainer.scss';

export function AlertText({ children }: { children?: React.ReactNode }) {
  return (
    <Container className="text">
      { children }
    </Container>
  );
}

export function Alert({ visible, fixed, type, className, children }: { visible?: boolean, fixed?: boolean, type?: string, className?: string, children?: React.ReactNode }) {
  return (
    <Container 
      className={[
        'alert'
      ]} 
      states={[{
        className: className ? `${className}` : '',
        condition: typeof className === 'string' && className.length > 0
      }, {
        className: type ? `alert--${type}` : '',
        condition: typeof type === 'string' && type.length > 0
      }, {
        className: 'boolean-visibility',
        condition: typeof visible === 'boolean'
      }, {
        className: 'boolean-visibility--hidden',
        condition: visible === false
      }, {
        className: 'boolean-visibility--visible',
        condition: visible === true
      }, {
        className: 'alert--fixed',
        condition: fixed === true
      }]}
    >
      {children}
    </Container>
  )
}

export default Alert;
