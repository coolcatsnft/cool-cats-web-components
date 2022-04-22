import React from "react";
import { ICatThumbnail } from "../../utils";
import Container from "../Container";
import RarityBadge from "../RarityBadge";
import Stats from "../Stats";

import '../../utils/scss/globals.scss';
import './CatThumbnail.scss';

export function CatThumbnail({ id, src, stats }: ICatThumbnail) {
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

  return (
    <Container className="ccwc-cat-thumbnail" title={catId}>
      <Container className="ccwc-cat-thumbnail__image">
        <img src={src} alt={catId} />
      </Container>
      <Container className="ccwc-cat-thumbnail__stats">
        <Stats {...statsProps}>
          <RarityBadge label={pointsLabel} value={num}>
            <span>{num}</span>
          </RarityBadge>
        </Stats>
      </Container>
    </Container>
  )
}