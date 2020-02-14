import React from 'react';
import styles from './TextBox.module.scss';
import SubmitButton from './components/SubmitButton';

export type TextBoxProps = {
  placeholderText: string,
  onSubmit: () => void
};

const TextBox = ({placeholderText, onSubmit} : TextBoxProps) => {
  return (<div className={styles.textbox}>
    <input type='text' name='title' placeholder={placeholderText}/>
    <SubmitButton onSubmit={onSubmit}/>
  </div>);
};

export default TextBox;
