import React from "react";
import ErrorMessage from "../ErrorMessage";

export function NetworkErrorMessage({ networkId, onClick }: { networkId: number, onClick?: React.MouseEventHandler<HTMLElement | HTMLButtonElement | HTMLInputElement>}) {
  return (
    <ErrorMessage onClick={onClick} elementType={typeof onClick !== 'undefined' ? 'button' : 'p'}>
      Switch to the<br />{ networkName(networkId) } network.
    </ErrorMessage>
  );
}

export default NetworkErrorMessage;

function networkName(id: any) {
  switch (String(id)) {
    case '1':
      return 'Main';
    case '3':
      return 'Ropsten';
    case '4':
      return 'Rinkeby';
    case '5':
      return 'Goerli';
    case '42':
      return 'Kovan';
    case 'localhost':
      return 'localhost';
    default:
      return 'local';
  }
}
