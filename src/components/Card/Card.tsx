import React from 'react';
import styles from './Card.module.scss';
import CardChip from './components/CardChip';
import CardFooter from './components/CardFooter';

export type CardProps = {
  title: string,
  category: string,
  imageUrl: string,
  userName: string,
  numberOfParticipants: number,
  submissionDate: string,
  IconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
};

const Card = ({imageUrl, title, category, userName, numberOfParticipants, submissionDate, IconComponent} : CardProps) =>  {
  const cardFooterProps = {
    userName,
    numberOfParticipants,
    submissionDate,
    imageUrl
  };

  return (<div className={styles.card}>
      <div className={styles.cardBody}>
        {IconComponent && <div className={styles.imageContainer}>
          <span className={styles.image}>
              <IconComponent/>
          </span>
        </div>}
        <div className={styles.cardTitleContainer}>
          <h2>{title}</h2>
          <div>
            <CardChip text={category}/>
          </div>
        </div>
      </div>
      <CardFooter {...cardFooterProps}/>
    </div>);
};

export default Card;
