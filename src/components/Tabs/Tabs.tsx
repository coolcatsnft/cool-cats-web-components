import React, { useState } from 'react';
import { IIndexable, ITabsProps, ITabsTab, ITabsContent, ITab, simpleSlug } from '../../utils';
import Container from "../Container";
import Header from '../Header';

import './Tabs.scss';

const getTab = (tab: string|ITab) => {
  return typeof tab === 'string' ? tab : tab.tab;
}

const getTabContent = (tab: string|ITab) => {
  return typeof tab === 'string' ? tab : tab.content;
}

export function Tabs({ tabs, activeTab, children, callback }: ITabsProps) {
  const [active, setActive] = useState<string>(getTab(tabs[0]) || activeTab || '');

  const setActiveTab = (tab: string) => {
    setActive(tab);

    if (callback) {
      callback(tab);
    }
  };

  if (!children || tabs.length === 0) {
    return (<></>);
  }

  const getTabs = () => {
    return tabs.map((t: (string|ITab), i: number) => {
      const tab = getTab(t);
      return (
        <TabsTab key={i} tab={t} active={active === tab || activeTab === tab} onClick={() => setActiveTab(tab)} />
      )
    });
  };

  const getContent = () => {
    const content = children as IIndexable;
    return tabs.map((tab: string, i: number) => {
      return (
        <TabsContent active={active === getTab(tab)} key={i}>
          { content[i] }
        </TabsContent>
      )
    });
  };

  return (
    <Container className="ccwc-tabs">
      <Container className="ccwc-tabs__headers">
        { getTabs() }
      </Container>
      <Container className="ccwc-tabs__panels">
        { getContent() }
      </Container>
    </Container>
  );
}

export function TabsTab({ tab, active, onClick }: ITabsTab) {
  return (
    <Header 
      size={2} 
      onClick={onClick} 
      className="ccwc-tabs__header" 
      states={[{
        className: 'active',
        condition: active
      }, {
        className: `ccwc-tabs__header--${simpleSlug(getTab(tab))}`
      }]}
    >
      { getTabContent(tab) }
    </Header>
  )
}

export function TabsContent({ active, children }: ITabsContent) {
  return (
    <Container className="ccwc-tabs__panel" states={[{ className: 'open', condition: active }]}>
      { children }
    </Container>
  )
}

export default Tabs;
