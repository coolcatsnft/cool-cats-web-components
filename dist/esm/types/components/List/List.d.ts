import React from 'react';
import { IGenericElementProps } from '../../utils';
interface IListItemContentProps {
    children: React.ReactElement;
}
export declare function ListItem({ children }: IListItemContentProps): JSX.Element;
export declare function List({ children, className, elementType: ElementType, ...rest }: IGenericElementProps): JSX.Element;
export default List;
