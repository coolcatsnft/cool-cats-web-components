import React from "react";
import Container from "../Container";
import { IPill } from "../../utils";

import './Pill.scss';

export function Pill(
  { 
    children,
    appear,
    direction,
    colour,
    icon,
    noText,
    disabled,
    bordered,
    className
  }: IPill
) {
  return (
    <Container
      className={["ccwc-pill", className || ""]}
      states={[{
        className: "appear",
        condition: appear === true
      }, {
        className: direction || "",
        condition: typeof direction === 'string' && direction.length > 0
      }, {
        className: "icon",
        condition: icon === true
      }, {
        className: "no-text",
        condition: noText === true
      }, {
        className: "bordered",
        condition: bordered === true
      }, {
        className: "disabled",
        condition: disabled === true
      }, {
        className: colour || "",
        condition: typeof colour === 'string' && colour.length > 0
      }]}
    >
      { children || null }
    </Container>
  );
}

export default Pill;
