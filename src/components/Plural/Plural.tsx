import React from 'react';
import { IPluralProps } from '../../utils';

export function Plural({ count, single, plural, zero, loading }: IPluralProps) {
  if (loading) {
    return (
      <>{ loading }</>
    );
  }

  if (count <= 0 && zero && zero.length) {
    return (
      <>{ zero }</>
    );
  }

  if (count === 1) {
    return (
      <>{ single }</>
    );
  }

  return (
    <>{ plural }</>
  );
}

export default Plural;
