import React, { forwardRef } from "react";
import { IPetThumbnail } from "../../utils";
import Container from "../Container";
import RarityBadge from "../RarityBadge";
import Stats from "../Stats";
import Thumbnail, { ThumbnailImage } from "../Thumbnail/Thumbnail";

import '../../utils/scss/globals.scss';
import '../CatThumbnail/CatThumbnail.scss';

export const PetThumbnail = forwardRef((props: IPetThumbnail, ref) => {
  const petId = `# ${props.id}`;
  const statsProps = {
    header: petId,
    stats: props.stats,
    nogaps: props.noStatGaps === true
  };
  const petStage = props.stage === 'final_form' ? 'Final' : props.stage.length > 0 ? props.stage[0].toUpperCase() + props.stage.substring(1) : "Egg";

  const StatsChild = petStage.length > 0 && !props.hideBadge ? (
    <RarityBadge label="Stage">
      <span>
        <svg width="200" height="200" viewBox="0 0 200 200">
          <text x="100" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="75">{petStage}</text>
        </svg>
      </span>
    </RarityBadge>
  ) : null;

  const onThumbnailClick = () => {
    if (typeof props.onClick === 'function' && !props.disabled) {
      props.onClick(props.nft);
    }
  }

  return (
    <Thumbnail
      ref={ref}
      invalidProps={[
        'stats',
        'hideBadge',
        'hideStats',
        'noStatGaps',
        'stage',
        'staked',
        'element',
        'enableOnClick',
        'dailyQuestsRemainingAmount',
        'dailyItemInteractionsAmount',
        'stageItemInteractionsAmount',
        'stageItemInteractionsMax'
      ]}
      {...props}
      className="ccwc-cat-thumbnail"
      title={petId}
      onClick={onThumbnailClick}
      states={(props.states || []).concat([{
        className: "ccwc-cat-thumbnail--pet"
      }, {
        className: `ccwc-cat-thumbnail--pet-stage-${petStage}`
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
      {props.stats && !props.hideStats && (
        <Container className="ccwc-cat-thumbnail__stats">
          <Stats {...statsProps}>
            {StatsChild}
          </Stats>
        </Container>
      )}
    </Thumbnail>
  )
})

export default PetThumbnail;
