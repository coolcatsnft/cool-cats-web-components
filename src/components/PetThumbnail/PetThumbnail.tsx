import React from "react";
import { IPetThumbnail } from "../../utils";
import Container from "../Container";
import RarityBadge from "../RarityBadge";
import Stats from "../Stats";

import '../../utils/scss/globals.scss';
import '../CatThumbnail/CatThumbnail.scss';
import { CatThumbnailImage } from "../CatThumbnail/CatThumbnail";

export function PetThumbnail({ id, stats, src, onClick, href, children, phase = "", element = "", selected = false, staked = false }: IPetThumbnail) {
  const petId = `# ${id}`;
  const statsProps = {
    stats: stats
  };
  const isHref = typeof href === 'string' && href.length > 0;
  const petPhase = phase === 'final_form' ? 'Final' : phase.length > 0 ? phase[0].toUpperCase() + phase.substring(1) : "";

  const StatsChild = petPhase.length > 0 ? (
    <RarityBadge label="Phase">
      <span>
        <svg viewBox="0 0 500 500">
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle" 
            textAnchor="middle"
            fontSize="150"
          >
            { petPhase }
          </text>
        </svg>  
      </span>
    </RarityBadge>
  ) : null;

  return (
    <Container 
      className="ccwc-cat-thumbnail" 
      title={petId}
      elementType={isHref ? "a" : "div"}
      states={[{
        className: "selected",
        condition: selected === true
      }, {
        className: "staked",
        condition: staked === true
      }, {
        className: typeof element === 'string' && element.length > 0 ? element : ""
      }, {
        attr: "data-phase",
        condition: typeof phase === 'string',
        value: typeof phase === 'string' ? phase : ''
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
      <CatThumbnailImage src={src} srcAlt={petId}>
        {children || null}
      </CatThumbnailImage>
      <Container className="ccwc-cat-thumbnail__stats">
        <Stats {...statsProps}>
          { StatsChild } 
        </Stats>
      </Container>
    </Container>
  )
}

export default PetThumbnail;
