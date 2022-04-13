import React from 'react';
import { IGenericElementProps, IIndexable } from '../../utils';
import Container from '../Container';

interface IGroupItemContentProps {
  children: React.ReactElement;
  elementType?: string
}

export function GroupItem({ children, elementType }: IGroupItemContentProps) {
  const type = elementType || 'li';
  if (!children) {
    return null;
  }

  if (children.type === type) {
    return (
      <>{ children }</>
    )
  }

  if (children?.props?.elementType === type) {
    return (
      <>{ children }</>
    )
  }

  return (
    <Container elementType={type}>
      { children }
    </Container>
  );
}

export function Group({ children, className, elementType: ElementType = 'ul', ...rest }: IGenericElementProps) {
  const props = rest as IIndexable;
  const childElementType = props.childElementType || 'li';

  const getContent = (itemElementType: string) => {
    const items = children as IIndexable;
    if (!items.filter) {
      return (
        <GroupItem elementType={itemElementType}>
          { items as any }
        </GroupItem>
      )
    }
    
    return items.filter((item: any) => {
      return typeof item !== 'undefined' && item;
    }).map((item: string, i: number) => {
      return (
        <GroupItem key={i}>
          { item as any }
        </GroupItem>
      )
    });
  };

  return (
    <Container invalidProps={['childElementType']} elementType={ElementType} className={className} {...rest}>
      { getContent(childElementType) }
    </Container>
  );
}

export default Group;
