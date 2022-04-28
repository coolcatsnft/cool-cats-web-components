import React, { useState } from "react";
import { IThumbnailListProps } from "../../utils";
import Container from "../Container";
import CatThumbnail from "../CatThumbnail";
import PetThumbnail from "../PetThumbnail";
import Thumbnail from "../Thumbnail/Thumbnail";

import '../../utils/scss/globals.scss';
import './ThumbnailList.scss';

export function ThumbnailList(props: IThumbnailListProps) {
  const [selected, setSelected] = useState<number[]>([]);

  const selectItem = (index: number) => {
    let updated = [...selected];
    if (selected.includes(index)) {
      updated = selected.filter(i => i !== index);
    } else {
      updated = [...selected, ...[index]];
    }

    setSelected(updated);

    if (props.onChange) {
      // @ts-ignore
      props.onChange(updated);
    }
  }

  const mutateProps = (child: any, index: number) => {
    const children = child.props.children;
    const newProps = {...child.props};
    delete newProps.children;
    
    if (props.size) {
      newProps.size = props.size;
    }

    if (props.selectable === true) {
      newProps.selected = selected.includes(index);

      if (newProps.selected === true && props.showCloseIcon === true) {
        newProps.closeable = true;
      }

      if (typeof newProps.onClick === 'function') {
        newProps.onClick = () => {
          selectItem(index);
          child.props.onClick();
        };
      } else {
        newProps.onClick = () => {
          selectItem(index);
        };
      }
    }

    if (child?.type === CatThumbnail) {
      return (
        <CatThumbnail key={index} {...newProps}>
          {children || null}
        </CatThumbnail>
      );
    }

    if (child?.type === PetThumbnail) {
      return (
        <PetThumbnail key={index} {...newProps}>
          {children || null}
        </PetThumbnail>
      );
    }

    if (child?.type === Thumbnail) {
      return (
        <Thumbnail key={index} {...newProps}>
          {children || null}
        </Thumbnail>
      );
    }

    return (
      <Thumbnail key={index} {...newProps}>
        {child}
      </Thumbnail>
    );
  };

  const getChildren = () => {
    if (props.children) {
      if (Array.isArray(props.children)) {
        return props.children.map((child: any, index: number) => mutateProps(child, index));
      }

      return mutateProps(props.children, 0);
    }

    return null;
  };

  return (
    <Container 
      {...props} 
      invalidProps={['size', 'selectable', 'showCloseIcon', 'amount', 'fluid']}
      states={(props.states || []).concat([{
        className: "ccwc-thumbnail-list"
      }, {
        className: typeof props.size === 'string' && props.size.length > 0 ? `ccwc-thumbnail-list--${props.size}` : ''
      }, {
        className: "ccwc-thumbnail-list--fluid",
        condition: props.fluid === true
      }])}
    >
      {getChildren()}
    </Container>
  )
};

export default ThumbnailList;
