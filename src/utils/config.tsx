export interface IIndexable {
  [key: string]: any;
};

export type TChildNode = React.ReactNode | React.ReactElement;

export interface IGenericElementProps {
  children: TChildNode;
  className?: string;
  elementType?: string;
};

export interface IJustChildrenProps {
  children: TChildNode;
};

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
};

export interface ITabsProps {
  children: React.ReactNode;
  tabs: string[];
  activeTab?: string;
};

export interface ITabsContent {
  children: React.ReactNode;
  active: boolean;
};

export interface ITabsTab {
  tab: string;
  active: boolean;
  onClick: Function;
};

export interface IPluralProps {
  count: number,
  single: string | React.ReactElement,
  plural: string | React.ReactElement,
  zero?: string,
  loading?: string
};

export type THeaderSize = 1|2|3|4|5;

export interface IPill {
  children?: React.ReactNode,
  appear?: boolean,
  direction?: string,
  colour?: string,
  className?: string,
  icon?: boolean,
  disabled?: boolean,
  noText?: boolean,
  bordered?: boolean
};

export interface IPills {
  children: React.ReactNode;
  className?: string;
  elementType?: string,
  bordered?: boolean,
  states?: (IContainerClassState|IContainerAttributeState)[]
};

export interface IContainerClassState {
  className: string,
  condition?: boolean|Function
};

export interface IContainerAttributeState {
  attr: string,
  value: string|number,
  condition?: boolean|Function
};

export interface IFormElement {
  type: string,
  disabled?: boolean,
  error?: boolean,
  htmlFor?: string,
  label?: string | React.ReactNode,
  children?: string | React.ReactNode
};

export interface IFormLabel {
  htmlFor?: string,
  children?: string | React.ReactNode
};

export interface IInput {
  name: string,
  id?: string,
  label?: string | React.ReactNode | boolean,
  type?: string,
  placeholder?: string,
  value?: any,
  min?: number,
  max?: number,
  hideLabel?: boolean,
  disabled?: boolean,
  checked?: boolean,
  pattern?: RegExp,
  onChange?: Function,
  onError?: Function,
  restrictOnError?: boolean,
  showError?: boolean,
  readonly?: boolean
}

export interface IEditableInput {
  editMode: boolean,
  name: string,
  label?: string | React.ReactNode,
  type?: string,
  placeholder?: string,
  value?: any,
  min?: number,
  max?: number,
  hideLabel?: boolean,
  disabled?: boolean,
  checked?: boolean,
  pattern?: RegExp,
  onChange?: Function,
  onError?: Function,
  restrictOnError?: boolean,
  showError?: boolean
};

export enum TPanelType {
  LISTITEM = 'listitem'
};

export interface IPanelProps {
  type: TPanelType,
  children?: React.ReactNode,
  header?: string
};
