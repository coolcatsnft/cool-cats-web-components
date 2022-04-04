/// <reference types="react" />
export interface IIndexable {
    [key: string]: any;
}
export declare type TChildNode = React.ReactNode | React.ReactElement;
export interface IGenericElementProps {
    children: TChildNode;
    className?: string;
    elementType?: string;
}
export interface IJustChildrenProps {
    children: TChildNode;
}
export interface IButtonProps {
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
export interface ITabsProps {
    children: React.ReactNode;
    tabs: string[];
    activeTab?: string;
}
export interface ITabsContent {
    children: React.ReactNode;
    active: boolean;
}
export interface ITabsTab {
    tab: string;
    active: boolean;
    onClick: Function;
}
export interface IPluralProps {
    count: number;
    single: string | React.ReactElement;
    plural: string | React.ReactElement;
    zero?: string;
    loading?: string;
}
export declare type THeaderSize = 1 | 2 | 3 | 4 | 5;
