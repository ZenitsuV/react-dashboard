import React from 'react';
import './KPIbox.css';

const KPIbox = ({
  KPIId,
  KPIFor,
  metricValue,
  changeValue,
  growthValue,
  growthIcon,
  isSelected,
  onSet,
}) => {
  const onSelectHandler = () => {
    onSet(KPIFor);
  };

  return (
    <section
      className={`${isSelected === 'True' ? 'SelectedKPI' : 'UnSelectedKPI'}`}
      id={`Summary_KPI_${KPIId}`}
      valueGet={KPIFor}
      onClick={onSelectHandler}
    >
      <p id="Summary_Vyvanse_KPI1_Header" className="Summary_KPI_text1">
        {KPIFor}
      </p>
      <h2 id="Summary_Vyvanse_KPI1_Vol" className="Summary_Alerts_text1">
        {metricValue}
      </h2>
      <hr className="Summary_Hroller" />
      <p className="Summary_KPI_PrevTimePeriod_L">vs. Prior</p>
      <div className="Summary_PreviousWrapper">
        <div
          id="Summary_Vyvanse_KPI1_GrowthImg"
          className={`Summary_Indicator${growthIcon}`}
        ></div>
        <p id="Summary_Vyvanse_KPI1_Growth" className="Summary_Change_Value">
          {`${growthValue} (${changeValue})`}
        </p>
      </div>
    </section>
  );
};

export default KPIbox;
