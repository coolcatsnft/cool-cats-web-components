import React, { forwardRef } from "react";
import { IThumbnailImageProps, IThumbnailProps } from "../../utils";
import Container from "../Container";

import '../../utils/scss/globals.scss';
import './Thumbnail.scss';

export function ThumbnailImage(props: IThumbnailImageProps) {
  return (
    <Container
      {...props}
      invalidProps={['src', 'srcAlt', 'children']}
      states={(props.states || []).concat([{
        className: "ccwc-thumbnail__image"
      }])}
    >
      {typeof props.src === 'string' && <img src={props.src} alt={props.srcAlt} />}
      {typeof props.src !== 'string' && typeof props.src !== 'undefined' && <>{props.src}</>}
      {props.children || null}
    </Container>
  )
}

export const Thumbnail = forwardRef((props: IThumbnailProps, ref) => {
  const isHref = typeof props.href === 'string' && props.href.length > 0;
  const invalids = ['size', 'closeable', 'clickable', 'quantity', 'src', 'ticked'];
  if (!isHref) {
    invalids.push('href');
  }

  return (
    <Container
      elementType={isHref ? "a" : "div"}
      {...props}
      ref={ref}
      invalidProps={(props.invalidProps || []).concat(invalids)}
      className={props.className || ""}
      states={(props.states || []).concat([{
        className: "ccwc-thumbnail"
      }, {
        className: typeof props.size === 'string' && props.size.length > 0 ? `ccwc-thumbnail--${props.size}` : 'ccwc-thumbnail--normal'
      }, {
        className: 'ccwc-thumbnail--selected',
        condition: props.selected === true
      }, {
        className: 'selected',
        condition: props.selected === true
      }, {
        className: 'ticked',
        condition: props.ticked === true
      }, {
        className: 'clickable',
        condition: typeof props.onClick === 'function'
      }, {
        className: 'closeable',
        condition: props.closeable === true
      }, {
        attr: 'data-quantity',
        value: typeof props.quantity === 'number' ? props.quantity : '',
        condition: typeof props.quantity === 'number'
      }, {
        attr: "href",
        value: isHref ? props.href : '',
        condition: isHref
      }, {
        attr: "target",
        value: isHref && props.href.slice(0, 4) === 'http' ? '_blank' : '',
        condition: isHref && props.href.slice(0, 4) === 'http'
      }])}
    >
      {props.children}
    </Container>
  )
})

export default Thumbnail;
