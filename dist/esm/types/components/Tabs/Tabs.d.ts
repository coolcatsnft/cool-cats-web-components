/// <reference types="react" />
import { ITabsProps, ITabsTab, ITabsContent } from '../../utils';
import './Tabs.scss';
export declare function Tabs({ tabs, activeTab, children }: ITabsProps): JSX.Element;
export declare function TabsTab({ tab, active, onClick }: ITabsTab): JSX.Element;
export declare function TabsContent({ active, children }: ITabsContent): JSX.Element;
export default Tabs;
