import React from "react";
import Container from "../Container";
import './MilkValue.scss';

export function MilkValue({ children, size, elementType }: { children?: React.ReactNode, size?: string, elementType?: string }) {
  const sizeExists = typeof size === 'string' && size.length > 0;
  return (
    <Container
      className="ccwc-milk-value"
      states={[{
        className: sizeExists ? `ccwc-milk-value--${size}` : '',
        condition: sizeExists === true
      }]}
      elementType={elementType || "span"}
    >
      { children || null }
    </Container>
  )
}

export default MilkValue;
