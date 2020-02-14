import React from 'react';
import styles from './TextBox.module.scss';
import {ReactComponent as SubmitIcon } from '../../assets/icons/right-arrow.svg';

export type TextBoxProps = {
  placeholderText: string,
  onSubmit: () => void
};

const TextBox = ({placeholderText, onSubmit} : TextBoxProps) => {
  return (<div className={styles.textbox}>
    <input type='text' name='title' placeholder={placeholderText}/>
    <div className={styles.submitButtonContainer}>
      <button type='submit' onSubmit={onSubmit}>
        <span>
          <SubmitIcon/>
        </span>
      </button>
    </div>
  </div>);
};

export default TextBox;
