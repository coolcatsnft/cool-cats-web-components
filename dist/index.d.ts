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
interface ITabsProps {
    children: React.ReactNode;
    tabs: string[];
    activeTab?: string;
}
interface ITabsContent {
    children: React.ReactNode;
    active: boolean;
}
interface ITabsTab {
    tab: string;
    active: boolean;
    onClick: Function;
}
interface IPluralProps {
    count: number;
    single: string | React.ReactElement;
    plural: string | React.ReactElement;
    zero?: string;
    loading?: string;
}
declare type THeaderSize = 1 | 2 | 3 | 4 | 5;
interface IPill {
    children?: React.ReactNode;
    appear?: boolean;
    direction?: string;
    colour?: string;
    className?: string;
    icon?: boolean;
    disabled?: boolean;
    noText?: boolean;
    bordered?: boolean;
}
interface IPills {
    children: React.ReactNode;
    className?: string;
    elementType?: string;
    bordered?: boolean;
    states?: (IContainerClassState | IContainerAttributeState)[];
}
interface IContainerClassState {
    className: string;
    condition?: boolean | Function;
}
interface IContainerAttributeState {
    attr: string;
    value: string | number;
    condition?: boolean | Function;
}

type Utils_IIndexable = IIndexable;
type Utils_TChildNode = TChildNode;
type Utils_IGenericElementProps = IGenericElementProps;
type Utils_IJustChildrenProps = IJustChildrenProps;
type Utils_IButtonProps = IButtonProps;
type Utils_ITabsProps = ITabsProps;
type Utils_ITabsContent = ITabsContent;
type Utils_ITabsTab = ITabsTab;
type Utils_IPluralProps = IPluralProps;
type Utils_THeaderSize = THeaderSize;
type Utils_IPill = IPill;
type Utils_IPills = IPills;
type Utils_IContainerClassState = IContainerClassState;
type Utils_IContainerAttributeState = IContainerAttributeState;
declare namespace Utils {
  export {
    Utils_IIndexable as IIndexable,
    Utils_TChildNode as TChildNode,
    Utils_IGenericElementProps as IGenericElementProps,
    Utils_IJustChildrenProps as IJustChildrenProps,
    Utils_IButtonProps as IButtonProps,
    Utils_ITabsProps as ITabsProps,
    Utils_ITabsContent as ITabsContent,
    Utils_ITabsTab as ITabsTab,
    Utils_IPluralProps as IPluralProps,
    Utils_THeaderSize as THeaderSize,
    Utils_IPill as IPill,
    Utils_IPills as IPills,
    Utils_IContainerClassState as IContainerClassState,
    Utils_IContainerAttributeState as IContainerAttributeState,
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

declare function Tabs({ tabs, activeTab, children }: ITabsProps): JSX.Element;
declare function TabsTab({ tab, active, onClick }: ITabsTab): JSX.Element;
declare function TabsContent({ active, children }: ITabsContent): JSX.Element;

declare function Plural({ count, single, plural, zero, loading }: IPluralProps): JSX.Element;

declare function Dots({ mod, absolute }: {
    mod?: number;
    absolute?: boolean;
}): JSX.Element;

declare function Header(props: any): JSX.Element;

declare function Pill({ children, appear, direction, colour, icon, noText, disabled, bordered, className }: IPill): JSX.Element;

declare function Pills({ children, className, bordered, states, ...rest }: IPills): JSX.Element;

declare function Cat(): JSX.Element;

declare function Pet(): JSX.Element;

declare function Item(): JSX.Element;

declare function Marketplace(): JSX.Element;

declare function Questing(): JSX.Element;

declare function Housing(): JSX.Element;

declare function Battling(): JSX.Element;

declare function Shop(): JSX.Element;

declare function Envelope(): JSX.Element;

declare function Meowpad({ open }: {
    open?: boolean;
}): JSX.Element;

declare function Help(): JSX.Element;

declare function NetworkErrorMessage({ networkId }: {
    networkId: number;
}): JSX.Element;

declare const Components_Container: typeof Container;
declare const Components_BooleanVisibilityContainer: typeof BooleanVisibilityContainer;
declare const Components_Alert: typeof Alert;
declare const Components_AlertText: typeof AlertText;
declare const Components_List: typeof List;
declare const Components_Tabs: typeof Tabs;
declare const Components_TabsTab: typeof TabsTab;
declare const Components_TabsContent: typeof TabsContent;
declare const Components_Plural: typeof Plural;
declare const Components_Dots: typeof Dots;
declare const Components_Header: typeof Header;
declare const Components_Pill: typeof Pill;
declare const Components_Pills: typeof Pills;
declare const Components_NetworkErrorMessage: typeof NetworkErrorMessage;
declare namespace Components {
  export {
    Components_Container as Container,
    Components_BooleanVisibilityContainer as BooleanVisibilityContainer,
    Components_Alert as Alert,
    Components_AlertText as AlertText,
    Components_List as List,
    Components_Tabs as Tabs,
    Components_TabsTab as TabsTab,
    Components_TabsContent as TabsContent,
    Components_Plural as Plural,
    Components_Dots as Dots,
    Components_Header as Header,
    Components_Pill as Pill,
    Components_Pills as Pills,
    Cat as CatIcon,
    Pet as PetIcon,
    Item as ItemIcon,
    Marketplace as MarketplaceIcon,
    Questing as QuestingIcon,
    Housing as HousingIcon,
    Battling as BattlingIcon,
    Shop as ShopIcon,
    Envelope as EnvelopeIcon,
    Meowpad as MeowpadIcon,
    Help as HelpIcon,
    Components_NetworkErrorMessage as NetworkErrorMessage,
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

export { Alert, AlertText, Battling as BattlingIcon, BooleanVisibilityContainer, Cat as CatIcon, Container, Dots, Envelope as EnvelopeIcon, Header, Help as HelpIcon, Housing as HousingIcon, IButtonProps, IContainerAttributeState, IContainerClassState, IGenericElementProps, IIndexable, IJustChildrenProps, IPill, IPills, IPluralProps, ITabsContent, ITabsProps, ITabsTab, Item as ItemIcon, List, Marketplace as MarketplaceIcon, Meowpad as MeowpadIcon, NetworkErrorMessage, Pet as PetIcon, Pill, Pills, Plural, Questing as QuestingIcon, Shop as ShopIcon, TChildNode, THeaderSize, Tabs, TabsContent, TabsTab, _default as default, useData, useObserver };
