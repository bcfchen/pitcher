import React from 'react';
import styles from './CardFooter.module.scss';

export type CardFooterProps = {
  imageUrl: string,
  userName: string,
  numberOfParticipants: number,
  submissionDate: string
};

const CardFooter = ({imageUrl, userName, numberOfParticipants, submissionDate} : CardFooterProps) => {
  const currentDateObj = new Date();
  const submissionDateObj = new Date(submissionDate);
  const monthsAgo = (currentDateObj.getMonth() - submissionDateObj.getMonth()) + 12 * (currentDateObj.getFullYear() - submissionDateObj.getFullYear());
  const imageSource = imageUrl && imageUrl.length > 0 ? imageUrl : 'https://secure.gravatar.com/avatar/c0914bf54730fcd89c034499dfc93c00?s=80&d=mp';
  return (<div className={styles.cardFooter}>
    <div className={styles.userProfileContainer}>
      <div className={styles.profileIconContainer}>
        <img className={styles.profileIcon} src={imageSource} alt='profile-icon'/>
      </div>
      <div className={styles.userInfoContainer}>
        <span>{userName}</span>
        <span className={styles.monthsAgo}>{monthsAgo} months ago</span>
      </div>
    </div>
    <div className={styles.participantsContainer}>
      <span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        </span>
        {numberOfParticipants}
      </span>
    </div>
  </div>);
};

export default CardFooter;
