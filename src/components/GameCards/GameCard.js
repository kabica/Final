import React from 'react';
import './GameCard.css';

function GameCard(props) {
  const className = !props.sel ? 'title_card' : 'mark_discover';
  return (
    <div class={className} onClick={props.onClick}>
      <img id='ow'src={props.logo} alt="logo" />
    </div>
  );
}

export default GameCard;