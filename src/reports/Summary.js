import React, { useState } from 'react';
import './Summary.css';
import PeriodToggle from '../components/PeriodToggle';
import KPIbox from '../components/KPIbox';
import Chart from '../components/Chart';

const Summary = () => {
  const [selectedKPI, setSelectedKPI] = useState('TRx');
  const [selectedPeriod, setSelectedPeriod] = useState('CW');
  const [selectedProduct, setSelectedProduct] = useState('Rollup');

  const selectProductHandler = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="report_container">
      <section className="top_section">
        <div className="header_panel">
          <div className="filter_container">
            <div className="filter_wrapper">
              <div className="filter_text">Market</div>
              <div className="market_filter">
                <select>
                  <option value="AM-Market">AM Market</option>
                </select>
              </div>
              <div className="pop_up_filter">Filter</div>
            </div>
            <PeriodToggle
              onSelect={setSelectedPeriod}
              selectedPeriod={selectedPeriod}
            />
          </div>
        </div>
        <div className="Date_wrapper">
          <h3 id="Summary_Alerts" className="DataasofDateText">
            Data as of
          </h3>
        </div>
      </section>

      <section className="kpi_section_outer_container">
        <section className="kpi_section_inner_container">
          <div className="section_heading">
            <div className="section_heading_text">
              <span>{`Performance Metrics - ${selectedPeriod}`}</span>
            </div>
          </div>
          <section className="kpi_inner">
            <div className="kpi_wrapper">
              <KPIbox
                KPIId="TRx"
                KPIFor="TRx"
                metricValue="41400"
                currentPeriod="CW"
                previousPeriod="PW"
                changeValue="0"
                growthValue="0.0%"
                growthIcon="Green"
                isSelected={`${selectedKPI == 'TRx' ? 'True' : 'False'}`}
                onSet={setSelectedKPI}
              />
              <KPIbox
                KPIId="TRx_Share"
                KPIFor="TRx Share"
                metricValue="41400"
                currentPeriod="CW"
                previousPeriod="PW"
                changeValue="0"
                growthValue="0.0%"
                growthIcon="Green"
                isSelected={`${selectedKPI == 'TRx Share' ? 'True' : 'False'}`}
                onSet={setSelectedKPI}
              />
              <KPIbox
                KPIId="NRx"
                KPIFor="NRx"
                metricValue="41400"
                currentPeriod="CW"
                previousPeriod="PW"
                changeValue="0"
                growthValue="0.0%"
                growthIcon="Null"
                isSelected={`${selectedKPI == 'NRx' ? 'True' : 'False'}`}
                onSet={setSelectedKPI}
              />
              <KPIbox
                KPIId="NRx_Share"
                KPIFor="NRx Share"
                metricValue="41400"
                currentPeriod="CW"
                previousPeriod="PW"
                changeValue="0"
                growthValue="0.0%"
                growthIcon="Red"
                isSelected={`${selectedKPI == 'NRx Share' ? 'True' : 'False'}`}
                onSet={setSelectedKPI}
              />
              <KPIbox
                KPIId="Total_Calls"
                KPIFor="Total Calls"
                metricValue="41400"
                currentPeriod="CW"
                previousPeriod="PW"
                changeValue="0"
                growthValue="0.0%"
                growthIcon="Green"
                isSelected={`${
                  selectedKPI == 'Total Calls' ? 'True' : 'False'
                }`}
                onSet={setSelectedKPI}
              />
              <KPIbox
                KPIId="Reach"
                KPIFor="% Reach"
                metricValue="41400"
                currentPeriod="CW"
                previousPeriod="PW"
                changeValue="0"
                growthValue="0.0%"
                growthIcon="Red"
                isSelected={`${selectedKPI == '% Reach' ? 'True' : 'False'}`}
                onSet={setSelectedKPI}
              />
              <KPIbox
                KPIId="Total_Writers"
                KPIFor="Total Writers"
                metricValue="41400"
                currentPeriod="CW"
                previousPeriod="PW"
                changeValue="0"
                growthValue="0.0%"
                growthIcon="Green"
                isSelected={`${
                  selectedKPI == 'Total Writers' ? 'True' : 'False'
                }`}
                onSet={setSelectedKPI}
              />
              <KPIbox
                KPIId="Samples"
                KPIFor="Samples"
                metricValue="41400"
                currentPeriod="CW"
                previousPeriod="PW"
                changeValue="0"
                growthValue="0.0%"
                growthIcon="Green"
                isSelected={`${selectedKPI == 'Samples' ? 'True' : 'False'}`}
                onSet={setSelectedKPI}
              />
            </div>
          </section>
        </section>
      </section>

      <section id="performance_trend" class="ts_performance_trend">
        <div class="ts_pt_header">
          <span class="RSM_HeaderText" id="Summary_Chart_Header">
            {`Competitive Trend - ${selectedKPI}`}
          </span>

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
              onClick={selectProductHandler.bind(null, 'Rollup')}
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
              onClick={selectProductHandler.bind(null, 'Family')}
            >
              Family
            </li>
          </ul>
          <div style={{ margin: '5px 10px 0 0' }}>
            <div
              id="Summary_PerformanceChartMax"
              class="Summary_Minimize_Black"
            ></div>
            <div
              id="Summary_PerformanceChartMin"
              class="Summary_Maximize_Black"
              style={{ display: 'none' }}
            ></div>
          </div>
          <div style={{ margin: '5px 10px 0 0' }}>
            <div
              id="rsm_ChartIcon2"
              valueGet="Chart"
              class="VisualType rsm_ChartIcon"
            ></div>
            <div
              id="rsm_GridIcon2"
              valueGet="Grid"
              style={{ display: 'none' }}
              class="VisualType rsm_GridIcon"
            ></div>
          </div>
        </div>
        <div id="SummaryTrendChart" class="Summary_TrendChart">
          <Chart />
        </div>
      </section>
    </div>
  );
};

export default Summary;
