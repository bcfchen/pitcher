import React from 'react';
import styles from './HowItWorksTable.module.scss';

const HowItWorksCard = ({title, description, IconComponent}) => (
  <div className={styles.HowItWorksCard}>
    <div><span><IconComponent/></span></div>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

type HowItWorksInfo = {
  title: string,
  description: string,
  IconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
};

type HowItWorksProps = {
  tableItems: Array<HowItWorksInfo>
};

const HowItWorksTable = ({tableItems} : HowItWorksProps) => {
  const tableColumns = tableItems.map((item) => <div className={styles.tableColumn}><HowItWorksCard {...item}/></div>);

  return (<div className={styles.howItWorksTable}>
    <div className={styles.tableColumn}>
    </div>
    {tableColumns}
</div>)};

export default HowItWorksTable;
