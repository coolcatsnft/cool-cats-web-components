import React from "react";
import { IPetThumbnail } from "../../utils";
import Container from "../Container";
import RarityBadge from "../RarityBadge";
import Stats from "../Stats";
import Thumbnail, { ThumbnailImage } from "../Thumbnail/Thumbnail";

import '../../utils/scss/globals.scss';
import '../CatThumbnail/CatThumbnail.scss';

export function PetThumbnail(props: IPetThumbnail) {
  const petId = `# ${props.id}`;
  const statsProps = {
    header: petId,
    stats: props.stats,
    nogaps: props.noStatGaps === true
  };
  const petPhase = props.phase === 'final_form' ? 'Final' : props.phase.length > 0 ? props.phase[0].toUpperCase() + props.phase.substring(1) : "Egg";

  const StatsChild = petPhase.length > 0 && !props.hideBadge ? (
    <RarityBadge label="Phase">
      <span>
        <svg width="200" height="200" viewBox="0 0 200 200">
          <text x="100" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="75" >{petPhase}</text>
        </svg>
      </span>
    </RarityBadge>
  ) : null;

  return (
    <Thumbnail 
      invalidProps={[
        'stats', 
        'hideBadge', 
        'hideStats', 
        'noStatGaps', 
        'phase', 
        'staked', 
        'element', 
        'enableOnClick', 
        'energyAmount', 
        'dailyQuestsRemainingAmount', 
        'dailyItemInteractionsAmount', 
        'phaseItemInteractionsAmount', 
        'phaseItemInteractionsMax'
      ]}
      {...props}
      className="ccwc-cat-thumbnail" 
      title={petId}
      onClick={props.onClick}
      states={(props.states || []).concat([{
        className: "ccwc-cat-thumbnail--pet"
      }, {
        className: `ccwc-cat-thumbnail--pet-phase-${petPhase}`
      }, {
        className: "staked",
        condition: props.staked === true
      }, {
        className: "ccwc-cat-thumbnail--withstats",
        condition: typeof props.stats !== 'undefined' && !props.hideStats 
      }, {
        className: typeof props.element === 'string' && props.element.length > 0 ? props.element : ""
      }])}
    >
      <ThumbnailImage className="ccwc-cat-thumbnail__image" src={props.src} srcAlt={petId}>
        {props.children || null}
      </ThumbnailImage>
      { props.stats && !props.hideStats && (
        <Container className="ccwc-cat-thumbnail__stats">
          <Stats {...statsProps}>
            { StatsChild } 
          </Stats>
        </Container>
      ) }
    </Thumbnail>
  )
}

export default PetThumbnail;
