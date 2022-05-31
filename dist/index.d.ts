/// <reference types="react" />
import React$1, { ChangeEventHandler, ReactNode, RefObject } from 'react';

interface IIndexable {
    [key: string]: any;
}
declare type TChildNode = React.ReactNode | React.ReactElement;
interface IGenericElementProps {
    children: TChildNode;
    className?: string;
    elementType?: string;
}
interface IAccordionItem {
    id: number;
    name: string;
    submenu?: IAccordionItem[];
    opened?: boolean;
}
interface IAccordionProps {
    items: IAccordionItem[];
    allowAllOpen?: boolean;
    activeItem: number | null;
    onItemClick: Function;
    defaultOpenedMenus?: number[];
}
interface IContainerProps extends React.HTMLAttributes<HTMLElement | HTMLButtonElement | HTMLInputElement> {
    classNames?: string[];
    loading?: boolean;
    emptyCondition?: boolean;
    disabled?: boolean;
    states?: (IContainerClassState | IContainerAttributeState)[];
    invalidProps?: string[];
    elementType?: string;
    href?: string;
    children?: React.ReactNode;
    viewBox?: string;
    width?: string;
    height?: string;
}
interface IThumbnailListProps extends IContainerProps {
    size?: string;
    selectable?: boolean;
    fluid?: boolean;
    showCloseIcon?: boolean;
}
interface IThumbnailProps extends IContainerProps {
    size?: string;
    selected?: boolean;
    closeable?: boolean;
    ticked?: boolean;
    quantity?: number;
    href?: string;
    claimable?: boolean;
}
interface IThumbnailImageProps extends IContainerProps {
    src?: string | React.ReactNode;
    srcAlt?: string;
}
interface IJustChildrenProps {
    children: TChildNode;
}
interface ITab {
    tab: string;
    content: any;
}
interface ITabsProps {
    children: React.ReactNode;
    tabs: (string | ITab)[];
    activeTab?: string;
    callback?: Function;
}
interface ITabsContent {
    children: React.ReactNode;
    active: boolean;
}
interface ITabsTab {
    tab: string | ITab;
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
    value: string | number | any;
    condition?: boolean | Function;
}
interface IFormElement {
    type: string;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    size?: string;
    htmlFor?: string;
    label?: string | React.ReactNode;
    children?: string | React.ReactNode;
}
interface IFormLabel {
    htmlFor?: string;
    children?: string | React.ReactNode;
}
declare type InputProps = {
    error: string;
    type: string;
    placeholder: string;
    id: string;
    autoComplete: string;
    name: string;
    onChange: ChangeEventHandler<HTMLElement>;
    onBlur: ChangeEventHandler<HTMLElement>;
    max: number;
    maxLength: number;
    min: number;
    minLength: number;
    value: any;
    defaultValue: any;
    label?: string | ReactNode | boolean;
    readOnly: boolean;
    disabled: boolean;
    required: boolean;
    size: any;
    cols: number;
    rows: number;
    checked: boolean;
    register: any;
    registerOptions: any;
    hideErrorMessage: boolean;
};
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
interface ISubStats {
    max: number;
    amount: number;
}
interface IStats {
    nogaps?: boolean;
    energy?: ISubStats;
    body?: number;
    shirt?: number;
    hats?: number;
    face?: number;
    questsRemaining?: ISubStats;
    dailyItemInteractions?: ISubStats;
    phaseItemInteractions?: ISubStats;
}
interface IStatBlock {
    stats: IStats;
    children?: React.ReactNode;
    header?: string;
    nogaps?: boolean;
}
interface IButtonProps {
    children?: React.ReactNode;
    label?: React.ReactNode;
    disabled?: boolean;
    expanded?: boolean;
    sashed?: boolean;
    colour?: string;
    className?: string;
    size?: string;
    onClick?: Function;
    elementType?: string;
    states?: any;
    title?: string;
    removeBaseClass?: boolean;
}
interface ICatThumbnail extends IThumbnailProps {
    id: string;
    stats: IStats;
    src?: string | React.ReactNode;
    hideStats?: boolean;
    hideBadge?: boolean;
}
declare type TPhase = "" | "egg" | "one" | "two" | "final_form";
declare type TElement = "" | "air" | "fire" | "grass" | "water";
interface IPetThumbnail extends ICatThumbnail {
    staked?: boolean;
    phase?: TPhase;
    element?: TElement;
}
interface IIncrement {
    min: number;
    max: number;
    defaultValue?: number;
    callback?: Function;
    label?: string;
    disabled?: boolean;
    removeBaseClass?: boolean;
    buttonClassName?: string;
    buttonSize?: string;
}

declare const simpleSlug: (str: string) => string;
declare const getSizes: () => string[];
declare const getColours: () => string[];

declare const Utils_simpleSlug: typeof simpleSlug;
declare const Utils_getSizes: typeof getSizes;
declare const Utils_getColours: typeof getColours;
type Utils_IIndexable = IIndexable;
type Utils_TChildNode = TChildNode;
type Utils_IGenericElementProps = IGenericElementProps;
type Utils_IAccordionItem = IAccordionItem;
type Utils_IAccordionProps = IAccordionProps;
type Utils_IContainerProps = IContainerProps;
type Utils_IThumbnailListProps = IThumbnailListProps;
type Utils_IThumbnailProps = IThumbnailProps;
type Utils_IThumbnailImageProps = IThumbnailImageProps;
type Utils_IJustChildrenProps = IJustChildrenProps;
type Utils_ITab = ITab;
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
type Utils_InputProps = InputProps;
type Utils_IEditableInput = IEditableInput;
type Utils_TPanelType = TPanelType;
declare const Utils_TPanelType: typeof TPanelType;
type Utils_IPanelProps = IPanelProps;
type Utils_ISubStats = ISubStats;
type Utils_IStats = IStats;
type Utils_IStatBlock = IStatBlock;
type Utils_IButtonProps = IButtonProps;
type Utils_ICatThumbnail = ICatThumbnail;
type Utils_TPhase = TPhase;
type Utils_TElement = TElement;
type Utils_IPetThumbnail = IPetThumbnail;
type Utils_IIncrement = IIncrement;
declare namespace Utils {
  export {
    Utils_simpleSlug as simpleSlug,
    Utils_getSizes as getSizes,
    Utils_getColours as getColours,
    Utils_IIndexable as IIndexable,
    Utils_TChildNode as TChildNode,
    Utils_IGenericElementProps as IGenericElementProps,
    Utils_IAccordionItem as IAccordionItem,
    Utils_IAccordionProps as IAccordionProps,
    Utils_IContainerProps as IContainerProps,
    Utils_IThumbnailListProps as IThumbnailListProps,
    Utils_IThumbnailProps as IThumbnailProps,
    Utils_IThumbnailImageProps as IThumbnailImageProps,
    Utils_IJustChildrenProps as IJustChildrenProps,
    Utils_ITab as ITab,
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
    Utils_InputProps as InputProps,
    Utils_IEditableInput as IEditableInput,
    Utils_TPanelType as TPanelType,
    Utils_IPanelProps as IPanelProps,
    Utils_ISubStats as ISubStats,
    Utils_IStats as IStats,
    Utils_IStatBlock as IStatBlock,
    Utils_IButtonProps as IButtonProps,
    Utils_ICatThumbnail as ICatThumbnail,
    Utils_TPhase as TPhase,
    Utils_TElement as TElement,
    Utils_IPetThumbnail as IPetThumbnail,
    Utils_IIncrement as IIncrement,
  };
}

declare const Container: React$1.ForwardRefExoticComponent<IContainerProps & React$1.RefAttributes<unknown>>;

declare function BooleanVisibilityContainer(props: any): JSX.Element;

declare function Accordion({ items, activeItem, onItemClick, defaultOpenedMenus, allowAllOpen }: IAccordionProps): JSX.Element;

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

declare function Tabs({ tabs, children, activeTab, callback }: ITabsProps): JSX.Element;
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

declare function NetworkErrorMessage({ networkId, onClick }: {
    networkId: number;
    onClick?: React$1.MouseEventHandler<HTMLElement | HTMLButtonElement | HTMLInputElement>;
}): JSX.Element;

declare function Group({ children, className, elementType: ElementType, ...rest }: IGenericElementProps): JSX.Element;

declare function ItemSummary(props: any): JSX.Element;

declare function Panel({ type, header, children }: IPanelProps): JSX.Element;

declare function ErrorMessage({ children, className, elementType: ElementType, ...rest }: IContainerProps): JSX.Element;

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

declare function Help({ fill, stroke, hollow }: {
    fill?: string;
    stroke?: string;
    hollow?: string;
}): JSX.Element;

declare function Milk(): JSX.Element;

declare function Icon(props: any): JSX.Element;

declare function Opensea({ invert }: {
    invert?: boolean;
}): JSX.Element;

declare function Air(): JSX.Element;

declare function Grass(): JSX.Element;

declare function Fire(): JSX.Element;

declare function Water(): JSX.Element;

declare function EggGroup(): JSX.Element;
declare function Egg(): JSX.Element;

declare function Circle({ children, fill, stroke }: {
    children?: React$1.ReactNode;
    fill?: string;
    stroke?: string;
}): JSX.Element;

declare function HammerGroup(): JSX.Element;
declare function Hammer(): JSX.Element;

declare function BoxGroup(): JSX.Element;
declare function Box(): JSX.Element;

declare function ChestGroup(): JSX.Element;
declare function Chest(): JSX.Element;

declare function ShareGroup(): JSX.Element;
declare function Share(): JSX.Element;

declare function ViewInfoGroup(): JSX.Element;
declare function ViewInfo(): JSX.Element;

declare function CogGroup({ fill, stroke }: {
    fill?: string;
    stroke?: string;
}): JSX.Element;
declare function Cog({ fill, stroke }: {
    fill?: string;
    stroke?: string;
}): JSX.Element;

declare function QuestionMarkGroup({ fill, stroke }: {
    fill?: string;
    stroke?: string;
}): JSX.Element;
declare function QuestionMark({ fill, stroke }: {
    fill?: string;
    stroke?: string;
}): JSX.Element;

declare function SwordAndShield(): JSX.Element;

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

declare function StatTable(stats: IStats): JSX.Element;
declare function Stats(props: IStatBlock): JSX.Element;

declare function RarityBadge({ label, className, value, children }: {
    label: string;
    className?: string;
    value?: number;
    children?: React$1.ReactNode;
}): JSX.Element;

declare function InputButton({ input, button }: {
    input: InputProps;
    button: IButtonProps;
}): JSX.Element;

declare function Button({ children, label, disabled, sashed, expanded, colour, className, size, onClick, elementType, states, title, removeBaseClass }: IButtonProps): JSX.Element;

declare function ThumbnailImage(props: IThumbnailImageProps): JSX.Element;
declare function Thumbnail(props: IThumbnailProps): JSX.Element;

declare function CatThumbnail(props: ICatThumbnail): JSX.Element;

declare function PetThumbnail(props: IPetThumbnail): JSX.Element;

declare function Increment({ min, max, defaultValue, callback, label, buttonSize, disabled, removeBaseClass, buttonClassName }: IIncrement): JSX.Element;

declare function ButtonIncrement({ size, colour, disabled, allowZero, buttonProps, incrementProps }: {
    size?: string;
    colour?: string;
    disabled?: boolean;
    allowZero?: boolean;
    buttonProps: IButtonProps;
    incrementProps: IIncrement;
}): JSX.Element;

declare function ThumbnailList(props: IThumbnailListProps): JSX.Element;

declare function Legend({ children }: IJustChildrenProps): JSX.Element;

declare function Element({ type, label, disabled, error, size, htmlFor, required, children }: IFormElement): JSX.Element;

declare function Fieldset(props: any): JSX.Element;

declare function Label({ htmlFor, children }: IFormLabel): JSX.Element;

declare const Input: React$1.ForwardRefExoticComponent<Partial<InputProps> & React$1.RefAttributes<any>>;

declare const Components_Container: typeof Container;
declare const Components_BooleanVisibilityContainer: typeof BooleanVisibilityContainer;
declare const Components_Accordion: typeof Accordion;
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
declare const Components_Stats: typeof Stats;
declare const Components_StatTable: typeof StatTable;
declare const Components_RarityBadge: typeof RarityBadge;
declare const Components_InputButton: typeof InputButton;
declare const Components_Button: typeof Button;
declare const Components_Thumbnail: typeof Thumbnail;
declare const Components_ThumbnailImage: typeof ThumbnailImage;
declare const Components_CatThumbnail: typeof CatThumbnail;
declare const Components_PetThumbnail: typeof PetThumbnail;
declare const Components_Increment: typeof Increment;
declare const Components_ButtonIncrement: typeof ButtonIncrement;
declare const Components_ThumbnailList: typeof ThumbnailList;
declare namespace Components {
  export {
    Components_Container as Container,
    Components_BooleanVisibilityContainer as BooleanVisibilityContainer,
    Components_Accordion as Accordion,
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
    Components_Stats as Stats,
    Components_StatTable as StatTable,
    Components_RarityBadge as RarityBadge,
    Components_InputButton as InputButton,
    Components_Button as Button,
    Components_Thumbnail as Thumbnail,
    Components_ThumbnailImage as ThumbnailImage,
    Components_CatThumbnail as CatThumbnail,
    Components_PetThumbnail as PetThumbnail,
    Components_Increment as Increment,
    Components_ButtonIncrement as ButtonIncrement,
    Components_ThumbnailList as ThumbnailList,
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
    Circle as CircleIcon,
    Box as BoxIcon,
    BoxGroup as BoxGroupIcon,
    Chest as ChestIcon,
    ChestGroup as ChestGroupIcon,
    Egg as EggIcon,
    EggGroup as EggGroupIcon,
    Hammer as HammerIcon,
    HammerGroup as HammerGroupIcon,
    Share as ShareIcon,
    ShareGroup as ShareGroupIcon,
    ViewInfo as ViewInfoIcon,
    ViewInfoGroup as ViewInfoGroupIcon,
    Air as AirIcon,
    Fire as FireIcon,
    Grass as GrassIcon,
    Water as WaterIcon,
    Cog as CogIcon,
    CogGroup as CogGroupIcon,
    QuestionMark as QuestionMarkIcon,
    QuestionMarkGroup as QuestionMarkGroupIcon,
    SwordAndShield as SwordAndShieldIcon,
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

declare function useOnClickOutside(ref: RefObject<HTMLElement>, handler: Function): void;

declare const Hooks_useObserver: typeof useObserver;
declare const Hooks_useData: typeof useData;
declare const Hooks_useMousePosition: typeof useMousePosition;
declare const Hooks_useEyes: typeof useEyes;
declare const Hooks_useOnClickOutside: typeof useOnClickOutside;
declare namespace Hooks {
  export {
    Hooks_useObserver as useObserver,
    Hooks_useData as useData,
    Hooks_useMousePosition as useMousePosition,
    Hooks_useEyes as useEyes,
    Hooks_useOnClickOutside as useOnClickOutside,
  };
}

declare const _default: {
    Components: typeof Components;
    Hooks: typeof Hooks;
    Utils: typeof Utils;
};

export { Accordion, Air as AirIcon, Alert, AlertText, Battling as BattlingIcon, BooleanVisibilityContainer, BoxGroup as BoxGroupIcon, Box as BoxIcon, Button, ButtonIncrement, Cat as CatIcon, CatThumbnail, ChestGroup as ChestGroupIcon, Chest as ChestIcon, Circle as CircleIcon, CogGroup as CogGroupIcon, Cog as CogIcon, Container, Dots, EggGroup as EggGroupIcon, Egg as EggIcon, Envelope as EnvelopeIcon, ErrorMessage, Fire as FireIcon, Element as FormElement, Fieldset as FormFieldset, Input as FormInput, Label as FormLabel, Legend as FormLegend, Grass as GrassIcon, Group, HammerGroup as HammerGroupIcon, Hammer as HammerIcon, Header, Help as HelpIcon, Housing as HousingIcon, IAccordionItem, IAccordionProps, IButtonProps, ICatThumbnail, IContainerAttributeState, IContainerClassState, IContainerProps, IEditableInput, IFormElement, IFormLabel, IGenericElementProps, IIncrement, IIndexable, IJustChildrenProps, IPanelProps, IPetThumbnail, IPill, IPills, IPluralProps, IStatBlock, IStats, ISubStats, ITab, ITabsContent, ITabsProps, ITabsTab, IThumbnailImageProps, IThumbnailListProps, IThumbnailProps, Icon, Increment, InputButton, InputProps, Item as ItemIcon, ItemSummary, List, Logo as LogoIcon, LogoMotion as LogoMotionIcon, Marketplace as MarketplaceIcon, Meowpad as MeowpadIcon, Milk as MilkIcon, MilkValue, NetworkErrorMessage, Opensea as OpenseaIcon, Panel, Pet as PetIcon, PetThumbnail, Pill, Pills, Plural, Questing as QuestingIcon, QuestionMarkGroup as QuestionMarkGroupIcon, QuestionMark as QuestionMarkIcon, RarityBadge, ShareGroup as ShareGroupIcon, Share as ShareIcon, Shop as ShopIcon, SiteLogo as SiteLogoIcon, SiteLogoMotion as SiteLogoMotionIcon, StatTable, Stats, SwordAndShield as SwordAndShieldIcon, TChildNode, TElement, THeaderSize, TPanelType, TPhase, Tabs, TabsContent, TabsTab, Thumbnail, ThumbnailImage, ThumbnailList, ViewInfoGroup as ViewInfoGroupIcon, ViewInfo as ViewInfoIcon, Water as WaterIcon, WhiteOutlineLogo as WhiteOutlineLogoIcon, WhiteOutlineLogoMotion as WhiteOutlineLogoMotionIcon, _default as default, getColours, getSizes, simpleSlug, useData, useEyes, useMousePosition, useObserver, useOnClickOutside };
