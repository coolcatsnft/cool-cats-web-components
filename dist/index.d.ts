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
interface IFormElement {
    type: string;
    disabled?: boolean;
    error?: boolean;
    htmlFor?: string;
    label?: string | React.ReactNode;
    children?: string | React.ReactNode;
}
interface IFormLabel {
    htmlFor?: string;
    children?: string | React.ReactNode;
}
interface IInput {
    name: string;
    id?: string;
    label?: string | React.ReactNode | boolean;
    type?: string;
    placeholder?: string;
    value?: any;
    min?: number;
    max?: number;
    hideLabel?: boolean;
    disabled?: boolean;
    checked?: boolean;
    pattern?: RegExp;
    onChange?: Function;
    onError?: Function;
    restrictOnError?: boolean;
    showError?: boolean;
    readonly?: boolean;
}
interface IEditableInput {
    editMode: boolean;
    name: string;
    label?: string | React.ReactNode;
    type?: string;
    placeholder?: string;
    value?: any;
    min?: number;
    max?: number;
    hideLabel?: boolean;
    disabled?: boolean;
    checked?: boolean;
    pattern?: RegExp;
    onChange?: Function;
    onError?: Function;
    restrictOnError?: boolean;
    showError?: boolean;
}
declare enum TPanelType {
    LISTITEM = "listitem"
}
interface IPanelProps {
    type: TPanelType;
    children?: React.ReactNode;
    header?: string;
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
type Utils_IFormElement = IFormElement;
type Utils_IFormLabel = IFormLabel;
type Utils_IInput = IInput;
type Utils_IEditableInput = IEditableInput;
type Utils_TPanelType = TPanelType;
declare const Utils_TPanelType: typeof TPanelType;
type Utils_IPanelProps = IPanelProps;
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
    Utils_IFormElement as IFormElement,
    Utils_IFormLabel as IFormLabel,
    Utils_IInput as IInput,
    Utils_IEditableInput as IEditableInput,
    Utils_TPanelType as TPanelType,
    Utils_IPanelProps as IPanelProps,
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

declare function List(props: IGenericElementProps): JSX.Element;

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

declare function NetworkErrorMessage({ networkId }: {
    networkId: number;
}): JSX.Element;

declare function Group({ children, className, elementType: ElementType, ...rest }: IGenericElementProps): JSX.Element;

declare function ItemSummary(props: any): JSX.Element;

declare function Panel({ type, header, children }: IPanelProps): JSX.Element;

declare function ErrorMessage({ children, className, elementType: ElementType, ...rest }: IGenericElementProps): JSX.Element;

declare function MilkValue({ children, size, elementType }: {
    children?: React$1.ReactNode;
    size?: string;
    elementType?: string;
}): JSX.Element;

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

declare function Milk(): JSX.Element;

declare function Icon(props: any): JSX.Element;

declare function Opensea({ invert }: {
    invert?: boolean;
}): JSX.Element;

interface ILogo {
    x?: number;
    y?: number;
    stroke?: string;
    fill?: string;
    eyes?: string;
    pupil?: string;
    whiskersLeft?: string;
    whiskersRight?: string;
    mouth?: string;
}
declare function Logo({ logo }: {
    logo?: ILogo;
}): JSX.Element;
declare function LogoMotion(): JSX.Element;
declare function SiteLogo(): JSX.Element;
declare function SiteLogoMotion(): JSX.Element;
declare function WhiteOutlineLogo(): JSX.Element;
declare function WhiteOutlineLogoMotion(): JSX.Element;

declare function Legend({ children }: IJustChildrenProps): JSX.Element;

declare function Element({ type, label, disabled, error, htmlFor, children }: IFormElement): JSX.Element;

declare function Fieldset(props: any): JSX.Element;

declare function Label({ htmlFor, children }: IFormLabel): JSX.Element;

declare function Input({ name, id, type, value, label, min, max, hideLabel, placeholder, pattern, onChange, onError, disabled, checked, restrictOnError, showError, readonly }: IInput): JSX.Element;

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
declare const Components_Group: typeof Group;
declare const Components_ItemSummary: typeof ItemSummary;
declare const Components_Panel: typeof Panel;
declare const Components_ErrorMessage: typeof ErrorMessage;
declare const Components_MilkValue: typeof MilkValue;
declare const Components_Icon: typeof Icon;
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
    Components_NetworkErrorMessage as NetworkErrorMessage,
    Components_Group as Group,
    Components_ItemSummary as ItemSummary,
    Components_Panel as Panel,
    Components_ErrorMessage as ErrorMessage,
    Components_MilkValue as MilkValue,
    Components_Icon as Icon,
    Legend as FormLegend,
    Element as FormElement,
    Label as FormLabel,
    Fieldset as FormFieldset,
    Input as FormInput,
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
    Milk as MilkIcon,
    Opensea as OpenseaIcon,
    Logo as LogoIcon,
    LogoMotion as LogoMotionIcon,
    SiteLogo as SiteLogoIcon,
    SiteLogoMotion as SiteLogoMotionIcon,
    WhiteOutlineLogo as WhiteOutlineLogoIcon,
    WhiteOutlineLogoMotion as WhiteOutlineLogoMotionIcon,
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

declare const useMousePosition: ({ includeTouch }: {
    includeTouch: any;
}) => {
    x: any;
    y: any;
};

declare function useEyes(): {
    xPos: number;
    yPos: number;
};

declare const Hooks_useObserver: typeof useObserver;
declare const Hooks_useData: typeof useData;
declare const Hooks_useMousePosition: typeof useMousePosition;
declare const Hooks_useEyes: typeof useEyes;
declare namespace Hooks {
  export {
    Hooks_useObserver as useObserver,
    Hooks_useData as useData,
    Hooks_useMousePosition as useMousePosition,
    Hooks_useEyes as useEyes,
  };
}

declare const _default: {
    Components: typeof Components;
    Hooks: typeof Hooks;
    Utils: typeof Utils;
};

export { Alert, AlertText, Battling as BattlingIcon, BooleanVisibilityContainer, Cat as CatIcon, Container, Dots, Envelope as EnvelopeIcon, ErrorMessage, Element as FormElement, Fieldset as FormFieldset, Input as FormInput, Label as FormLabel, Legend as FormLegend, Group, Header, Help as HelpIcon, Housing as HousingIcon, IButtonProps, IContainerAttributeState, IContainerClassState, IEditableInput, IFormElement, IFormLabel, IGenericElementProps, IIndexable, IInput, IJustChildrenProps, IPanelProps, IPill, IPills, IPluralProps, ITabsContent, ITabsProps, ITabsTab, Icon, Item as ItemIcon, ItemSummary, List, Logo as LogoIcon, LogoMotion as LogoMotionIcon, Marketplace as MarketplaceIcon, Meowpad as MeowpadIcon, Milk as MilkIcon, MilkValue, NetworkErrorMessage, Opensea as OpenseaIcon, Panel, Pet as PetIcon, Pill, Pills, Plural, Questing as QuestingIcon, Shop as ShopIcon, SiteLogo as SiteLogoIcon, SiteLogoMotion as SiteLogoMotionIcon, TChildNode, THeaderSize, TPanelType, Tabs, TabsContent, TabsTab, WhiteOutlineLogo as WhiteOutlineLogoIcon, WhiteOutlineLogoMotion as WhiteOutlineLogoMotionIcon, _default as default, useData, useEyes, useMousePosition, useObserver };
