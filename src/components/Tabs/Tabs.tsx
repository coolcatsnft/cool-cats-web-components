import React, { useState } from 'react';
import { IIndexable, ITabsProps, ITabsTab, ITabsContent } from '../../utils';
import Container from "../Container";

import './Tabs.scss';

export function Tabs({ tabs, activeTab, children }: ITabsProps) {
  const [active, setActive] = useState<string>(activeTab || tabs[0] || '');

  if (!children || tabs.length === 0) {
    return (<></>);
  }

  const getTabs = () => {
    return tabs.map((t: string, i: number) => {
      return (
        <Tab key={i} tab={t} active={active === t} onClick={() => setActive(t)} />
      )
    });
  };

  const getContent = () => {
    const content = children as IIndexable;
    return tabs.map((tab: string, i: number) => {
      return (
        <Content active={active === tab} key={i}>
          { content[i] }
        </Content>
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

export function Tab({ tab, active, onClick }: ITabsTab) {
  return (
    <Container onClick={onClick} elementType="h2" className="ccwc-tabs__header" states={[{ className: 'active', condition: active }]}>
      { tab }
    </Container>
  )
}

export function Content({ active, children }: ITabsContent) {
  return (
    <Container className="ccwc-tabs__panel" states={[{ className: 'open', condition: active }]}>
      { children }
    </Container>
  )
}

export default Tabs;
