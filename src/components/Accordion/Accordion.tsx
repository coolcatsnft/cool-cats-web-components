import React, { Fragment, useEffect, useState } from 'react';
import Container from '../Container';
import { Button } from '../index';
import { IAccordionItem, IAccordionProps } from '../../utils';

import './Accordion.scss';

export function Accordion({ items, activeItem, onItemClick, defaultOpenedMenus }: IAccordionProps) {
  const [accordionItems, setAccordionItems] = useState<IAccordionItem[]>([]);

  useEffect(() => {
    setAccordionItems(items.map(item => {
      if (!item.submenu) {
        return { ...item, opened: false };
      }
      return { ...item, opened: item.submenu.some(subItem => subItem.id === activeItem) || defaultOpenedMenus?.some(i => i === item.id) };
    }))
  }, [items])


  const onMenuItemClick = (item: IAccordionItem) => {
    if (!item.submenu) {
      onItemClick(item);
      return;
    }

    const items = [...accordionItems];
    setAccordionItems(items.map(accItem => {
      if (accItem.name === item.name) {
        accItem.opened = !accItem.opened;
      }
      return accItem;
    }))
  }

  return (
    <Container className="ccwc-accordion">
      {
        accordionItems.map((item) => (
            <Fragment key={item.id}>
              <Button size="simple-yellow" onClick={() => onMenuItemClick(item)}>
                <div className="ccwc-accordion--menu">
                  <div className="label">{item.name}</div>
                  {
                    item.submenu &&
                    <span className={item.opened ? 'arrow-down' : 'arrow-up'}></span>
                  }
                </div>
              </Button>
              {
                item.opened && item.submenu &&
                (
                  <div className="ccwc-accordion--submenu">
                    {
                      item.submenu.map((submenu) => (
                        <Button key={submenu.id} className={submenu.id === activeItem ? 'active' : ''} onClick={() => onItemClick(submenu)} expanded>{submenu.name}</Button>
                      ))
                    }
                  </div>
                )
              }
            </Fragment>
          )
        )
      }
    </Container>
  )
}

export default Accordion;
