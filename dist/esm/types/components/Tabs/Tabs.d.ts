/// <reference types="react" />
import { ITabsProps, ITabsTab, ITabsContent } from '../../utils';
import './Tabs.scss';
export declare function Tabs({ tabs, activeTab, children }: ITabsProps): JSX.Element;
export declare function Tab({ tab, active, onClick }: ITabsTab): JSX.Element;
export declare function Content({ active, children }: ITabsContent): JSX.Element;
export default Tabs;
