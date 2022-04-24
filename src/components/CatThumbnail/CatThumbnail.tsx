import React from "react";
import { ICatThumbnail } from "../../utils";
import Container from "../Container";
import RarityBadge from "../RarityBadge";
import Stats from "../Stats";

import '../../utils/scss/globals.scss';
import './CatThumbnail.scss';

export function CatThumbnailImage({ src, srcAlt, children }: { src?: string|React.ReactNode, srcAlt?: string, children?: React.ReactNode }) {
  return (
    <Container className="ccwc-cat-thumbnail__image">
      {typeof src === 'string' && <img src={src} alt={srcAlt} />}
      {typeof src !== 'string' && typeof src !== 'undefined' && <>{src}</>}
      {children || null}
    </Container>
  )
}

export function CatThumbnail({ id, stats, src, onClick, href, children, selected = false, claimable = false }: ICatThumbnail) {
  const catId = `# ${id}`;
  const total = (stats.hats || 0) + (stats.face || 0) + (stats.shirt || 0);
  const statsProps = {
    header: catId,
    stats: stats
  };

  const num = (((total - 1) % 2) + 1);
  let pointsLabel = 'cool';

  // WILD
  if (total > 4 && total < 7) {
    pointsLabel = 'wild';
  }

  // CLASSY
  if (total > 6 && total < 9) {
    pointsLabel = 'classy';
  }

  // EXOTIC
  if (total > 8) {
    pointsLabel = 'exotic';
  }

  const isHref = typeof href === 'string' && href.length > 0;

  return (
    <Container 
      className="ccwc-cat-thumbnail" 
      title={catId}
      elementType={isHref ? "a" : "div"}
      states={[{
        className: "selected",
        condition: selected === true
      }, {
        className: "claimable",
        condition: claimable === true
      }, {
        className: "clickable",
        condition: typeof onClick === 'function'
      }, {
        attr: "href",
        value: isHref ? href : '',
        condition: isHref
      }, {
        attr: "target",
        value: isHref && href.slice(0, 4) === 'http' ? '_blank' : '',
        condition: isHref && href.slice(0, 4) === 'http'
      }]}
      onClick={onClick}
    >
      <CatThumbnailImage src={src} srcAlt={catId}>
        {children || null}
      </CatThumbnailImage>
      <Container className="ccwc-cat-thumbnail__stats">
        <Stats {...statsProps}>
          <RarityBadge label={pointsLabel} value={total}>
            <span>{num}</span>
          </RarityBadge>
        </Stats>
      </Container>
    </Container>
  )
}

export default CatThumbnail;
