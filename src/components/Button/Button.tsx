import React from 'react';
import styles from './Button.module.scss';

export type ButtonProps = {
  label: string,
  theme: 'primary' | 'secondary' | 'warning' | 'success' | 'light' | 'default',
  url: string,
  IconComponent?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
};

const Button = ({label, theme, url, IconComponent} : ButtonProps) => {
  const btnClassName = styles.button + ' ' + styles[theme];
  return(<a className={btnClassName} href={url}>
      <span className={styles.icon}>
        {IconComponent && (<IconComponent/>)}
      </span>
      <span>
        {label}
      </span>
  </a>);
};

export default Button;
