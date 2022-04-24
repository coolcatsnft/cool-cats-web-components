import React from "react";
import Container from "../Container";

import '../../utils/scss/globals.scss';
import './ConicNumber.scss';

export function ConicNumber({ value, max, title }: { value: number, max: number, title: string }) {
  return (
    <Container 
      className="ccwc-conic"
      states={[{
        attr: "style",
        value: {
          "--percentage": (value / max) * 100
        }
      }]}
      title={title}
    >
      <span>{value} / {max}</span>
    </Container>
  )
};

export default ConicNumber;