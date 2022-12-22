import React from 'react';

const Toggle = ({ selectedProduct, onSelect }) => {
  return (
    <ul style={{ margin: '5px 10px 0 10px' }}>
      <li
        className={`${
          selectedProduct === 'Rollup'
            ? 'Summary_PlotName TimeToggleSelected'
            : 'Summary_PlotName'
        }`}
        style={{
          borderTopLeftRadius: '5px',
          borderBottomLeftRadius: '5px',
        }}
        valueGet="Rollup"
        id="SummaryRollupToggle"
        onClick={onSelect.bind(null, 'Rollup')}
      >
        Rollup
      </li>
      <li
        className={`${
          selectedProduct === 'Family'
            ? 'Summary_PlotName TimeToggleSelected'
            : 'Summary_PlotName'
        }`}
        style={{
          borderTopTightRadius: '5px',
          borderBottomRightRadius: '5px',
        }}
        valueGet="Family"
        id="SummaryFamilyToggle"
        onClick={onSelect.bind(null, 'Family')}
      >
        Family
      </li>
    </ul>
  );
};

export default Toggle;
