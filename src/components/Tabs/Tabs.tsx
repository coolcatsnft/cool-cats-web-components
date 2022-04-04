import React, { useState } from 'react';
import { IIndexable, ITabsProps, ITabsTab, ITabsContent } from '../../utils';
import Container from "../Container";
import Header from '../Header';

import './Tabs.scss';

export function Tabs({ tabs, activeTab, children }: ITabsProps) {
  const [active, setActive] = useState<string>(activeTab || tabs[0] || '');

  if (!children || tabs.length === 0) {
    return (<></>);
  }

  const getTabs = () => {
    return tabs.map((t: string, i: number) => {
      return (
        <TabsTab key={i} tab={t} active={active === t} onClick={() => setActive(t)} />
      )
    });
  };

  const getContent = () => {
    const content = children as IIndexable;
    return tabs.map((tab: string, i: number) => {
      return (
        <TabsContent active={active === tab} key={i}>
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
    <Header size={2} onClick={onClick} className="ccwc-tabs__header" states={[{ className: 'active', condition: active }]}>
      { tab }
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
