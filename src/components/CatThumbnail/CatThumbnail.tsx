import React from "react";
import { ICatThumbnail } from "../../utils";
import Thumbnail, { ThumbnailImage } from "../Thumbnail/Thumbnail";
import Container from "../Container";
import RarityBadge from "../RarityBadge";
import Stats from "../Stats";

import '../../utils/scss/globals.scss';
import './CatThumbnail.scss';

export function CatThumbnail(props: ICatThumbnail) {
  const catId = `# ${props.id}`;
  const total = (props.stats.hats || 0) + (props.stats.face || 0) + (props.stats.shirt || 0);
  const statsProps = {
    header: catId,
    stats: props.stats
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

  const statsChild = !props.hideBadge ? (
    <RarityBadge label={pointsLabel} value={total}>
      <span>{num}</span>
    </RarityBadge>
  ) : undefined;

  return (
    <Thumbnail 
      {...props}
      invalidProps={(props.invalidProps || []).concat(['stats', 'claimable', 'hideBadge', 'hideStats', 'ticked'])}
      className="ccwc-cat-thumbnail" 
      title={catId}
      onClick={props.onClick}
      states={(props.states || []).concat([{
        className: "claimable",
        condition: props.claimable === true
      }, {
        className: "ccwc-cat-thumbnail--withstats",
        condition: !props.hideStats
      }])}
    >
      <ThumbnailImage className="ccwc-cat-thumbnail__image" src={props.src} srcAlt={catId}>
        {props.children || null}
      </ThumbnailImage>
      { !props.hideStats && (
        <Container className="ccwc-cat-thumbnail__stats">
          <Stats {...statsProps}>
            {statsChild}
          </Stats>
        </Container>
      ) }
    </Thumbnail>
  )
}

export default CatThumbnail;
