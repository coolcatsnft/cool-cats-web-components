import React from 'react';
import Container from "../Container";

export function Header(props: any) {
  const headerSize = typeof props.size === 'number' ? props.size : '2';
  return (
    <Container 
      {...props}
      invalidProps={['size']}
      elementType={`h${headerSize}`}
      className={props.className || ''}
      states={(props.states || []).concat([{
        className: 'ccwc-header'
      }, {
        className: `ccwc-header--${headerSize}`
      }])}
    >
      { props.children }
    </Container>
  )
}

export default Header;
