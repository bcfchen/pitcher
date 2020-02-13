import React from 'react';
import styles from './Header.module.scss';

export type HeaderProps = {
  primaryBtnLabel: string,
  primaryBtnCallback: () => void,
  secondaryBtnLabel: string,
  secondaryBtnCallback: () => void,
  title: string,
  IconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
};

const Header = ({primaryBtnLabel, primaryBtnCallback, secondaryBtnLabel, secondaryBtnCallback, title, IconComponent} : HeaderProps) => {
  return (<header className={styles.header}>
    <nav>
      <a>
      </a>
      <div>
      </div>
    </nav>
  </header>);
};

export default Header;
