
import React from "react";
import List from "../List";
import { IStatBlock, IStats } from "../../utils";
import Header from "../Header";
import Container from "../Container";

import './Stats.scss';

export function StatTable(stats: IStats) {
  const getItems = (max: number, value: number) => {
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

  return (
    <List className="ccwc-stats-table">
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
        <li className="quests" data-amount={stats.questsRemaining.amount} title="Quests completed">
          {getItems(stats.questsRemaining.max, stats.questsRemaining.amount)}
        </li>
      ) }
      { stats.dailyItemInteractions && (
        <li 
          className="items" 
          data-amount={stats.dailyItemInteractions.amount} 
          data-max={stats.dailyItemInteractions.max} 
          title="Daily item interactions complete"
        >
          {getItems(stats.dailyItemInteractions.max, stats.dailyItemInteractions.amount)}
        </li>
      ) }
      { stats.phaseItemInteractions && (
        <li className="pets" data-amount={stats.phaseItemInteractions.amount} data-max={stats.phaseItemInteractions.max} title={stats.phaseItemInteractions.amount === stats.phaseItemInteractions.max ? `Phase complete!` : `Item interactions to next phase`}>
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
      }]}
    >
      { props.header && <Header size="4">{props.header}</Header> }
      <StatTable {...props.stats} />
      { props.children || null }
    </Container>
  )
}

export default Stats;
