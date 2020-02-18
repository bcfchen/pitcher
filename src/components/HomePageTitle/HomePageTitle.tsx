import React from 'react';
import styles from './HomePageTitle.module.scss';
import TextBox from '../TextBox';
import {ReactComponent as MainPageIcon} from '../../assets/icons/main-page-icon.svg';
import {ReactComponent as ExploreIdeasIcon} from '../../assets/icons/explore-ideas.svg';

export type HomePageTitleProps = {
  mainTextTop: string,
  mainTextBottom: string,
  subTextTop: string,
  subTextBottom: string,
  textBoxPlaceholder: string,
  onSubmit: () => void,
  linkText: string
};

const HomePageTitle = ({mainTextTop, mainTextBottom, subTextTop, subTextBottom, textBoxPlaceholder, onSubmit, linkText} : HomePageTitleProps) => 
(<div className={styles.homePageTitle}>
  <a href='/'><MainPageIcon/></a>
  <h1>
    {mainTextTop}
    <span>{mainTextBottom}</span>
    <span>|</span>
  </h1>
  <p>
    {subTextTop}
    <br/>
    {subTextBottom}
  </p>
  <div><TextBox placeholderText={textBoxPlaceholder} onSubmit={onSubmit}/></div>
  <a href='/cards'>
    <span><ExploreIdeasIcon/></span>
    {linkText}
  </a>
</div>);

export default HomePageTitle;
