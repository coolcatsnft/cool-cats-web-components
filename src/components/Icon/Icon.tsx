import React from "react";
import Container from "../Container";

import '../../utils/scss/globals.scss';
import './Icon.scss';

export function Icon(props: any) {
  const iconProps = {...props};
  iconProps.states = [{
    className: 'ccwc-icon'
  }].concat(iconProps.states || []);
  if (iconProps.colour || iconProps.color) {
    iconProps.states.push({
      className: iconProps.colour || iconProps.color
    });

    delete iconProps.colour;
    delete iconProps.color;
  }

  return (
    <Container {...iconProps} />
  )
}

export default Icon;
