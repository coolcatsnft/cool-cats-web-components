import React from "react";
import Container from "../Container";

import './BooleanVisibilityContainer.scss';

export function BooleanVisibilityContainer(props: any) {
  return (
    <Container
      elementType={props.elementType || 'div'}
      className={props.class || props.className || ''}
      states={[{
        className: 'boolean-visibility'
      }, {
        className: 'boolean-visibility--hidden',
        condition: props.visible !== true
      }, {
        className: 'boolean-visibility--visible',
        condition: props.visible === true
      }]}
    >
      { props.children || null }
    </Container>
  )
}

export default BooleanVisibilityContainer;
