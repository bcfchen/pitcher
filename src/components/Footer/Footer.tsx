import React from 'react';
import styles from './Footer.module.scss';
import { stripLeadingSlash } from 'history/PathUtils';

export type FooterItem = {
  name: string,
  link: string
};

export type FooterProps = {
  contacts: Array<FooterItem>,
  infos: Array<FooterItem>,
  languages: Array<FooterItem>,
  termsLink: string,
  privacyLink: string
};

const createColumnItems = (columnItems) => {
  return columnItems.map(item => <li><a href={item.link}>{item.name}</a></li>);
}

const Footer = ({contacts, infos, languages, termsLink, privacyLink} : FooterProps) => {
  const [contactItems, infoItems, langaugeItems] = [contacts, infos, languages].map(itemsCollection => createColumnItems(itemsCollection));

  return (<footer className={styles.footer}>
    <div className={styles.mainFooterArea}>
      <div className={styles.grid}>
        <div className={styles.column}>
          <h6>Contact</h6>
          <ul>
            {contactItems}
          </ul>
        </div>
        <div className={styles.column}>
          <h6>Infos</h6>
          <ul>
            {infoItems}
          </ul>
        </div>
        <div className={styles.column}>
          <h6>Language</h6>
          <ul>
            {langaugeItems}
          </ul>
        </div>
      </div>
    </div>
    <div className={styles.termsAndPrivacyArea}>
      <div className={styles.row}> 
        <div className={styles.trademark}>© 2020 Pitchcard</div>
        <div className={styles.termsAndPrivacyText}>
          <a href={termsLink}>Terms</a>
          <span>·</span>
          <a href={privacyLink}>Privacy</a>
        </div>
      </div>
    </div>
  </footer>);
}

export default Footer;
