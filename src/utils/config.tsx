export interface IIndexable {
  [key: string]: any;
};

export type TChildNode = React.ReactNode | React.ReactElement;

export interface IGenericElementProps {
  children: TChildNode;
  className?: string;
  elementType?: string;
};

export interface IContainerProps extends React.HTMLAttributes<HTMLElement|HTMLButtonElement|HTMLInputElement> {
  classNames?: string[];
  loading?: boolean;
  emptyCondition?: boolean;
  disabled?: boolean;
  states?: (IContainerClassState|IContainerAttributeState)[];
  invalidProps?: string[];
  elementType?: string;
  href?: string;
  children?: React.ReactNode;
  viewBox?: string;
  width?: string;
  height?: string;
};

export interface IThumbnailListProps extends IContainerProps {
  size?: string;
  selectable?: boolean;
  fluid?: boolean;
  showCloseIcon?: boolean;
}

export interface IThumbnailProps extends IContainerProps {
  size?: string;
  selected?: boolean;
  closeable?: boolean;
  ticked?: boolean;
  quantity?: number;
  href?: string;
  claimable?: boolean;
};

export interface IThumbnailImageProps extends IContainerProps {
  src?: string|React.ReactNode,
  srcAlt?: string
};

export interface IJustChildrenProps {
  children: TChildNode;
};

export interface ITab {
  tab: string;
  content: any;
};

export interface ITabsProps {
  children: React.ReactNode;
  tabs: (string|ITab)[];
  activeTab?: string;
  callback?: Function;
};

export interface ITabsContent {
  children: React.ReactNode;
  active: boolean;
};

export interface ITabsTab {
  tab: string|ITab;
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
  value: string|number|any,
  condition?: boolean|Function
};

export interface IFormElement {
  type: string,
  disabled?: boolean,
  error?: boolean,
  size?: string,
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
  size?: string,
	required?: boolean,
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

export interface ISubStats {
  max: number,
  amount: number
};

export interface IStats {
  body?: number,
  shirt?: number,
  hats?: number,
  face?: number,
  questsRemaining?: ISubStats,
  dailyItemInteractions?: ISubStats,
  phaseItemInteractions?: ISubStats
};

export interface IStatBlock {
  stats: IStats,
  children?: React.ReactNode,
  header?: string
};

export interface IButtonProps {
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
};

export interface ICatThumbnail extends IThumbnailProps {
	id: string;
  stats: IStats;
	src?: string|React.ReactNode;
  hideStats?: boolean;
  hideBadge?: boolean;
};

export type TPhase = "" | "egg" | "one" | "two" | "final_form";
export type TElement = "" | "air" | "fire" | "grass" | "water";

export interface IPetThumbnail extends ICatThumbnail {
  staked?: boolean;
  phase?: TPhase;
  element?: TElement;
};

export interface IIncrement {
  min: number;
  max: number;
  defaultValue?: number;
  callback?: Function;
  label?: string;
  disabled?: boolean;
  removeBaseClass?: boolean;
  buttonClassName?: string;
  buttonSize?: string;
};
