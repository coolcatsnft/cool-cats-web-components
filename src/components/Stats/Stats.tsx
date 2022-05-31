
import React from "react";
import List from "../List";
import { IStatBlock, IStats } from "../../utils";
import Header from "../Header";
import Container from "../Container";

import './Stats.scss';

export function StatTable(stats: IStats) {
  const getItems = (max: number, value: number) => {
    if (stats.nogaps === true) {
      return (
        <Container 
          elementType="span"
          data-max={max}
          data-value={value}
        >
          <Container 
            className="activebar"
            elementType="span"
            style={{width: String(Number((value / max) * 100).toFixed(0)) + "%"}}
          />
        </Container>
      );
    }

    return Array.from(Array(max).keys()).map((key: number) => {
      return (
        <Container 
          key={key}
          elementType="span"
          states={[{
            className: "active",
            condition: key < value
          }]}
        />
      )
    })
  };

  const statsLength = Object.keys(stats).filter(s => s !== 'nogaps').length;

  return (
    <List 
      className="ccwc-stats-table" 
      data-stats-length={statsLength}
    >
      { stats.energy && (
        <li 
          className="energy" 
          data-max={stats.energy.max} 
          data-amount={stats.energy.amount} title={`${stats.energy.amount} / ${stats.energy.max} energy remaining`}
        >
          {getItems(stats.energy.max, stats.energy.amount)}
        </li>
      ) }
      { stats.hats && (
        <li className="hat" data-amount={stats.hats} title="Hat">
          {getItems(4, stats.hats)}
        </li>
      ) }
      { stats.shirt && (
        <li className="clothes" data-amount={stats.shirt} title="Clothes">
          {getItems(4, stats.shirt)}
        </li>
      ) }
      { stats.face && (
        <li className="mood" data-amount={stats.face} title="Mood">
          {getItems(2, stats.face)}
        </li>
      ) }
      { stats.questsRemaining && (
        <li className="quests" data-amount={stats.questsRemaining.amount} title={`${stats.questsRemaining.amount} / ${stats.questsRemaining.max} quests completed`}>
          {getItems(stats.questsRemaining.max, stats.questsRemaining.amount)}
        </li>
      ) }
      { stats.dailyItemInteractions && (
        <li 
          className="items" 
          data-amount={stats.dailyItemInteractions.amount} 
          data-max={stats.dailyItemInteractions.max} 
          title={`${stats.dailyItemInteractions.amount} / ${stats.dailyItemInteractions.max} daily item interactions complete`}
        >
          {getItems(stats.dailyItemInteractions.max, stats.dailyItemInteractions.amount)}
        </li>
      ) }
      { stats.phaseItemInteractions && (
        <li 
          className="pets" 
          data-amount={stats.phaseItemInteractions.amount} 
          data-max={stats.phaseItemInteractions.max} 
          title={stats.phaseItemInteractions.amount === stats.phaseItemInteractions.max ? `Phase complete!` : `${stats.phaseItemInteractions.max - stats.phaseItemInteractions.amount} item interaction${(stats.phaseItemInteractions.max - stats.phaseItemInteractions.amount) === 1 ? '' : 's'} to next phase`}
        >
          {getItems(stats.phaseItemInteractions.max, stats.phaseItemInteractions.amount)}
        </li>
      ) }
    </List>
  )
}

export function Stats(props: IStatBlock) {
  return (
    <Container
      className="ccwc-stats"
      states={[{
        className: "ccwc-stats--withbadge",
        condition: typeof props.children !== 'undefined' && props.children !== null
      }, {
        className: "ccwc-stats--nogaps",
        condition: props.nogaps === true
      }]}
    >
      { props.header && <Header size="4">{props.header}</Header> }
      <StatTable {...props.stats} nogaps={props.nogaps} />
      { props.children || null }
    </Container>
  )
}

export default Stats;
