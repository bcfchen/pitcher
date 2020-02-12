import React from 'react';
import styles from './Card.module.scss';
import {ReactComponent as EmployeeProject} from '../../assets/icons/employee-project.svg';
import CardChip from './components/CardChip';
import CardFooter from './components/CardFooter';

export type CardProps = {
  title: string,
  category: string,
  imageUrl: string,
  userName: string,
  numberOfParticipants: number,
  submissionDate: string
};

const Card = ({title, category, imageUrl, userName, numberOfParticipants, submissionDate} : CardProps) =>  {
  const cardFooterProps = {
    imageUrl,
    userName,
    numberOfParticipants,
    submissionDate
  };

  return (<div className={styles.card}>
      <div className={styles.cardBody}>
        <div className={styles.imageContainer}>
          <span className={styles.image}>
              <EmployeeProject/>
          </span>
        </div>
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
