import React from 'react';
import styles from './CardFooter.module.scss';

export type CardFooterProps = {
  imageUrl: string,
  userName: string,
  numberOfParticipants: number,
  submissionDate: string
};

const CardFooter = ({imageUrl, userName, numberOfParticipants, submissionDate}) => {
  const monthsAgo = 0;
  return (<div className={styles.cardFooter}>
    <div className={styles.userInfoContainer}>
      <span>{imageUrl}</span>
      <span>{userName}</span>
      <span>{monthsAgo}</span>
    </div>
    <div className={styles.participantsContainer}>
      <span>{numberOfParticipants}</span>
    </div>
  </div>);
};

export default CardFooter;
