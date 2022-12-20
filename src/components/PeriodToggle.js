import React from 'react';
import './PeriodToggle.css';

const PeriodToggle = () => {
  return (
    <div className="period_toggle">
      <ul style={{ width: '253px', height: '25px' }}>
        <li
          class="SummaryTime TimeToggle"
          valueGet="C01W"
          id="SummaryTimeC01W{{id}}"
          style={{
            borderTopLeftRadius: '5px',
            borderBottomLeftRadius: '5px',
          }}
        >
          CW
        </li>
        <li
          class="SummaryTime TimeToggle"
          valueGet="C04W"
          id="SummaryTimeC04W{{id}}"
        >
          C4W
        </li>
        <li
          class="SummaryTime TimeToggle"
          valueGet="C13W"
          id="SummaryTimeC13W{{id}}"
        >
          C13W
        </li>
        <li
          class="SummaryTime TimeToggle"
          valueGet="CQTD"
          id="SummaryTimeCQTD{{id}}"
          style={{
            borderTopRightRadius: '5px',
            borderBottomRightRadius: '5px',
          }}
        >
          QTD
        </li>
      </ul>
    </div>
  );
};

export default PeriodToggle;
