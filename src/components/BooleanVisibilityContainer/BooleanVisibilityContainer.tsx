import React from "react";
import Container from "../Container";

import '../../utils/scss/globals.scss';
import './BooleanVisibilityContainer.scss';

export function BooleanVisibilityContainer(props: any) {
  return (
    <Container
      elementType={props.elementType || 'div'}
      className={props.class || props.className || ''}
      states={[{
        className: 'ccwc-boolean-visibility'
      }, {
        className: 'ccwc-boolean-visibility--hidden',
        condition: props.visible !== true
      }, {
        className: 'ccwc-boolean-visibility--visible',
        condition: props.visible === true
      }]}
    >
      { props.children || null }
    </Container>
  )
}

export default BooleanVisibilityContainer;
