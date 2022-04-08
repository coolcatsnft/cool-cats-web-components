import React from "react";
import Container from "../Container";

import '../../utils/scss/globals.scss';
import './CoolTablet.scss';

export function CoolTablet({ children, open }: { children?: React.ReactChildren, open?: boolean}) {
  return (
    <Container
      className="ccwc-cool-tablet" 
      states={[{
        attr: 'open',
        value: 'open',
        condition: open === true
      }]}
    >
      { children || null }
    </Container>
  );
}

export default CoolTablet;
