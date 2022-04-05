import React from 'react';
import { IGenericElementProps } from '../../utils';
interface IGroupItemContentProps {
    children: React.ReactElement;
    elementType?: string;
}
export declare function GroupItem({ children, elementType }: IGroupItemContentProps): JSX.Element;
export declare function Group({ children, className, elementType: ElementType, ...rest }: IGenericElementProps): JSX.Element;
export default Group;
