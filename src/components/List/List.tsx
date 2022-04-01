import React from 'react';
import { IGenericElementProps, IIndexable } from '../../utils';
import Container from '../Container';

interface IListItemContentProps {
  children: React.ReactElement;
}

export function ListItem({ children }: IListItemContentProps) {
  if (!children) {
    return null;
  }

  if (children.type === 'li') {
    return (
      <>{ children }</>
    )
  }

  if (children?.props?.elementType === 'li') {
    return (
      <>{ children }</>
    )
  }

  return (
    <Container elementType="li">
      { children }
    </Container>
  );
}

export function List({ children, className, elementType: ElementType = 'ul', ...rest }: IGenericElementProps) {
  const getContent = () => {
    const items = children as IIndexable;
    if (!items.filter) {
      return (
        <ListItem>
          { items as any }
        </ListItem>
      )
    }
    
    return items.filter((item: any) => {
      return typeof item !== 'undefined' && item;
    }).map((item: string, i: number) => {
      return (
        <ListItem key={i}>
          { item as any }
        </ListItem>
      )
    });
  };

  return (
    <Container elementType={ElementType} className={className || 'cool-cats-list'} {...rest}>
      { getContent() }
    </Container>
  );
}

export default List;
