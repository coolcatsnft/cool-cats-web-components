import React from "react";
import { IPanelProps } from "../../utils";
import Container from "../Container";
import Header from "../Header";

import './Panel.scss';

export function Panel({ type, header, children }: IPanelProps) {
  return (
    <Container 
      className="ccwc-panel"
      states={[{
        className: `ccwc-panel--${type}`
      }]}
    >
      { header && <Header size={2} className="ccwc-panel__header">{ header }</Header> }
      { children }
    </Container>
  )
}

export default Panel;
