/// <reference types="react" />
import React$1 from 'react';

interface IIndexable {
    [key: string]: any;
}
declare type TChildNode = React.ReactNode | React.ReactElement;
interface IGenericElementProps {
    children: TChildNode;
    className?: string;
    elementType?: string;
}
interface IJustChildrenProps {
    children: TChildNode;
}
interface IButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    colour?: string;
    className?: string;
    size?: string;
    onClick?: Function;
    elementType?: string;
    states?: any;
    title?: string;
}

type Utils_IIndexable = IIndexable;
type Utils_TChildNode = TChildNode;
type Utils_IGenericElementProps = IGenericElementProps;
type Utils_IJustChildrenProps = IJustChildrenProps;
type Utils_IButtonProps = IButtonProps;
declare namespace Utils {
  export {
    Utils_IIndexable as IIndexable,
    Utils_TChildNode as TChildNode,
    Utils_IGenericElementProps as IGenericElementProps,
    Utils_IJustChildrenProps as IJustChildrenProps,
    Utils_IButtonProps as IButtonProps,
  };
}

declare function Container(props: any): JSX.Element;

declare function BooleanVisibilityContainer(props: any): JSX.Element;

declare function AlertText({ children }: {
    children?: React$1.ReactNode;
}): JSX.Element;
declare function Alert({ visible, fixed, type, className, children }: {
    visible?: boolean;
    fixed?: boolean;
    type?: string;
    className?: string;
    children?: React$1.ReactNode;
}): JSX.Element;

declare function List({ children, className, elementType: ElementType, ...rest }: IGenericElementProps): JSX.Element;

declare const Components_Container: typeof Container;
declare const Components_BooleanVisibilityContainer: typeof BooleanVisibilityContainer;
declare const Components_Alert: typeof Alert;
declare const Components_AlertText: typeof AlertText;
declare const Components_List: typeof List;
declare namespace Components {
  export {
    Components_Container as Container,
    Components_BooleanVisibilityContainer as BooleanVisibilityContainer,
    Components_Alert as Alert,
    Components_AlertText as AlertText,
    Components_List as List,
  };
}

declare function useObserver(ref: any): boolean;

declare function useData(initialData?: any[]): {
    get: () => any[];
    set: (value: any) => void;
    reset: (value: any) => void;
    push: (value: any) => any;
    pop: () => any;
    removeByValue: (value: any) => void;
};

declare const Hooks_useObserver: typeof useObserver;
declare const Hooks_useData: typeof useData;
declare namespace Hooks {
  export {
    Hooks_useObserver as useObserver,
    Hooks_useData as useData,
  };
}

declare const _default: {
    Components: typeof Components;
    Hooks: typeof Hooks;
    Utils: typeof Utils;
};

export { Alert, AlertText, BooleanVisibilityContainer, Container, IButtonProps, IGenericElementProps, IIndexable, IJustChildrenProps, List, TChildNode, _default as default, useData, useObserver };
