import React, { useEffect, useState } from 'react';
import Container from '../Container';
import { Button } from '../index';

import './Accordion.scss';

export function Accordion({ items, activeItem, onItemClick }) {
  //todo: set activeitem
  const [accordionItems, setAccordionItems] = useState([]);

  useEffect(() => {
    setAccordionItems(items.map(item => {
      if (!item.submenu) {
        return { ...item, opened: false };
      }
      return { ...item, opened: item.submenu.some(subItem => subItem.id === activeItem) };
    }))
  }, [])


  const onMenuItemClick = (item) => {
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
        accordionItems.map((item, id) => (
            <>
              <Button key={id} size="simple-yellow" onClick={() => onMenuItemClick(item)}>
                {/*todo change name*/}
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
                      item.submenu.map((submenu, id) => (
                        <Button key={id} className={submenu.id === activeItem && 'active'} onClick={() => onItemClick(submenu)} expanded>{submenu.name}</Button>
                      ))
                    }
                  </div>
                )
              }
            </>
          )
        )
      }
    </Container>
  )
}
