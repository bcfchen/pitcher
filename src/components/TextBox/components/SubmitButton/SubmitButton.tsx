import React from 'react';
import styles from './SubmitButton.module.scss';
import {ReactComponent as SubmitIcon } from '../../../../assets/icons/right-arrow.svg';

export type SubmitButtonProps = {
  onSubmit: () => void
};

const SubmitButton = ({onSubmit} : SubmitButtonProps) => (<div className={styles.submitButtonContainer}>
  <button type='submit' onClick={onSubmit}>
      <SubmitIcon/>
  </button>
</div>);

export default SubmitButton;
