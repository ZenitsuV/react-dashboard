import React, { useState } from 'react';
import './Summary.css';
import PeriodToggle from '../components/PeriodToggle';
import KPIbox from '../components/KPIbox';
import Chart from '../components/Chart';
import Toggle from '../components/Toggle';

const Summary = () => {
  const [selectedMarket, setSelectedMarket] = useState('AM Market');
  const [value, setValue] = useState('Orange');
  const [selectedKPI, setSelectedKPI] = useState('TRx');
  const [selectedPeriod, setSelectedPeriod] = useState('CW');
  const [selectedProduct, setSelectedProduct] = useState('Rollup');

  const handleMarketDropdown = (e) => {
    setSelectedMarket(e.target.value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="report_container">
      <section className="top_section">
        <div className="header_panel">
          <div className="filter_container">
            <div className="filter_wrapper">
              <div className="filter_text">Market</div>
              <div className="market_filter">
                <select value={selectedMarket} onChange={handleMarketDropdown}>
                  <option value="AM-Market">AM Market</option>
                  <option value="MD-Market">MD Market</option>
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
              <span>{`Performance Metrics - ${selectedMarket} - ${selectedPeriod}`}</span>
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
            {`Competitive Trend - Product ${selectedProduct} - ${selectedKPI}`}
          </span>
          <Toggle
            onSelect={setSelectedProduct}
            selectedProduct={selectedProduct}
          />
        </div>
        <div id="SummaryTrendChart" class="Summary_TrendChart">
          <Chart />
        </div>
      </section>
    </div>
  );
};

export default Summary;
