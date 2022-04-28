import React from "react"

export function ViewInfoGroup() {
  return (
    <g className="ccwc-svgicon-group ccwc-svgicon-group--viewinfo">
      <path d="M56 33C59.866 33 63 29.866 63 26C63 22.134 59.866 19 56 19C52.134 19 49 22.134 49 26C49 29.866 52.134 33 56 33Z" fill="black"/>
      <path d="M56 82V42H46" stroke="black" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M46 82H66" stroke="black" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M56 29C57.6569 29 59 27.6569 59 26C59 24.3431 57.6569 23 56 23C54.3431 23 53 24.3431 53 26C53 27.6569 54.3431 29 56 29Z" fill="white"/>
      <path d="M56 82V42H46" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M46 82H66" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  )
}

export function ViewInfo() {
  return (
    <svg width="111" height="110" viewBox="0 0 111 110" fill="none" className="ccwc-svgicon ccwc-svgicon--share">
      <ViewInfoGroup />
    </svg>
  )
}

export default ViewInfo;
