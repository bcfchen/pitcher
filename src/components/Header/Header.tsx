import React from 'react';
import styles from './Header.module.scss';
import Button from '../Button';
import {ReactComponent as LogoIcon} from '../../assets/icons/logo.svg';
import {ReactComponent as PlusSignIcon } from '../../assets/icons/plus-sign.svg';
import {ReactComponent as JoinIcon } from '../../assets/icons/join.svg';

export type HeaderProps = {
  headerLink: string,
  primaryBtnCallback: () => void,
  secondaryBtnCallback: () => void
};

const Header = ({headerLink, primaryBtnCallback, secondaryBtnCallback} : HeaderProps) => {
  return (<header className={styles.pitcherHeader}>
    <nav>
      <a href={headerLink}>
        <span className={styles.headerIcon}><LogoIcon/></span>
        <span className={styles.headerLabel}>Pitchcard</span>
      </a>
      <div className={styles.buttonContainer}>
        <Button label='Pitch' url='' theme='primary' IconComponent={PlusSignIcon}/>
        <Button label='Join' url='' theme='light' IconComponent={JoinIcon}/> 
      </div>
    </nav>
  </header>);
};

export default Header;
