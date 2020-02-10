import React from 'react';
import CardChip from './components/CardChip';

export type CardProps = {
  title: string,
  category: string
};

const Card = ({title, category} : CardProps) => (<>
<h1>{title}</h1>
  <div>
      <CardChip text={category}/>
  </div>
</>)

export default Card;
