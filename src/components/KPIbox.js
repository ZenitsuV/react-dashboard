import React from 'react';
import './KPIbox.css';

const KPIbox = () => {
  return (
    <section class="UnSelectedKPI" id="Summary_KPI_TRx" valueGet="TRx">
      <p id="Summary_Vyvanse_KPI1_Header" class="Summary_KPI_text1">
        TRx
      </p>
      <h2 id="Summary_Vyvanse_KPI1_Vol" class="Summary_Alerts_text1">
        42400
      </h2>
      <hr class="Summary_Hroller" />
      <p class="Summary_KPI_PrevTimePeriod_L">vs. PW</p>
      <div class="Summary_PreviousWrapper">
        <div
          id="Summary_Vyvanse_KPI1_GrowthImg"
          class="Summary_IndicatorNull"
        ></div>
        <p id="Summary_Vyvanse_KPI1_Growth" class="Summary_Change_Value">
          0.0% (0)
        </p>
      </div>
    </section>
  );
};

export default KPIbox;
