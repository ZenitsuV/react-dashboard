import React from 'react';
import './PeriodToggle.css';

const PeriodToggle = ({ selectedPeriod, onSelect }) => {
  return (
    <div className="period_toggle">
      <ul style={{ width: '253px', height: '25px' }}>
        <li
          className={`${
            selectedPeriod === 'CW'
              ? 'SummaryTime TimeToggle TimeToggleSelected'
              : 'SummaryTime TimeToggle'
          }`}
          valueGet="CW"
          id="SummaryTimeC01W"
          style={{
            borderTopLeftRadius: '5px',
            borderBottomLeftRadius: '5px',
          }}
          onClick={onSelect.bind(null, 'CW')}
        >
          CW
        </li>
        <li
          className={`${
            selectedPeriod === 'C4W'
              ? 'SummaryTime TimeToggle TimeToggleSelected'
              : 'SummaryTime TimeToggle'
          }`}
          valueGet="C04W"
          id="SummaryTimeC04W"
          onClick={onSelect.bind(null, 'C4W')}
        >
          C4W
        </li>
        <li
          className={`${
            selectedPeriod === 'C13W'
              ? 'SummaryTime TimeToggle TimeToggleSelected'
              : 'SummaryTime TimeToggle'
          }`}
          valueGet="C13W"
          id="SummaryTimeC13W"
          onClick={onSelect.bind(null, 'C13W')}
        >
          C13W
        </li>
        <li
          className={`${
            selectedPeriod === 'CQTD'
              ? 'SummaryTime TimeToggle TimeToggleSelected'
              : 'SummaryTime TimeToggle'
          }`}
          valueGet="CQTD"
          id="SummaryTimeCQTD"
          onClick={onSelect.bind(null, 'CQTD')}
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
