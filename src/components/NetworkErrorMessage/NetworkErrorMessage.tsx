import React from "react";
import Container from "../Container";

import '../../utils/scss/globals.scss';
import './NetworkErrorMessage.scss';

export function NetworkErrorMessage({ networkId }: { networkId: number }) {
  return (
    <Container elementType="p" className="ccwc-error-message">
      Switch to the<br />{ networkName(networkId) } network.
    </Container>
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
