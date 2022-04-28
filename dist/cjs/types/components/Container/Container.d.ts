/// <reference types="react" />
import { IContainerProps, IGenericElementProps } from '../../utils';
export declare function Element({ children, className, elementType: ElementType, ...rest }: IGenericElementProps): JSX.Element;
export declare function Container(props: IContainerProps): JSX.Element;
export default Container;
