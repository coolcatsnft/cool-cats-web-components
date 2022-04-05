import React from 'react';
import { IGenericElementProps } from '../../utils';

import Group from '../Group';

export function List(props: IGenericElementProps) {
  return (
    <Group {...props} />
  );
}

export default List;
