import React, { cloneElement, useState } from 'react';
import { autoUpdate, flip, offset, shift, useClick, useDismiss, useFloating, useFocus, useHover, useInteractions, useRole } from "@floating-ui/react-dom-interactions";
import { ITooltipOptions, ITooltipProps } from '../../utils';

export const defaultOptions: ITooltipOptions = {
  placement: 'top',
  shiftOptions: {},
  hoverOptions: {},
  focusOptions: {},
  offsetOptions: 5,
  clickOptions: {
    enabled: false
  },
  dismissOptions: {}
}


export const Tooltip = ({ children, label, className, options }: ITooltipProps) => {
  const tooltipOptions = { ...defaultOptions, ...options }
  const [open, setOpen] = useState(false);
  const { x, y, reference, floating, strategy, context } = useFloating({
    placement: tooltipOptions.placement,
    open,
    onOpenChange: setOpen,
    middleware: [offset(tooltipOptions.offsetOptions), flip(), shift(tooltipOptions.shiftOptions)],
    whileElementsMounted: autoUpdate
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, tooltipOptions.hoverOptions),
    useFocus(context, tooltipOptions.focusOptions),
    useRole(context, { role: "tooltip" }),
    useClick(context, tooltipOptions.clickOptions),
    useDismiss(context)
  ]);

  return (
    <>
      {cloneElement(
        children,
        getReferenceProps({ ref: reference, ...children.props })
      )}
      {open && (
        <div
          {...getFloatingProps({
            ref: floating,
            className: `ccwc-tooltip ${className}`,
            style: {
              position: strategy,
              top: y ?? "",
              left: x ?? ""
            }
          })}
        >
          {label}
        </div>
      )}
    </>
  );
}

export default Tooltip

