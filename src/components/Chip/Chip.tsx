import React from 'react';
import styles from './Chip.module.scss';

export type ChipProps = {
  text: string,
  link: string
};

const Chip = ({text, link} : ChipProps) => (<>
    <a className={styles.a} href={link}>
      {text}
    </a>
</>)

export default Chip;
